/**
 * SecVault Cryptographic Core - AES-GCM Implementation
 */
class SecVaultCrypto {
    static async generateKey(password, salt) {
        const enc = new TextEncoder();
        const keyMaterial = await crypto.subtle.importKey(
            'raw',
            enc.encode(password),
            'PBKDF2',
            false,
            ['deriveKey']
        );
        
        return await crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: salt,
                iterations: 100000,
                hash: 'SHA-256'
            },
            keyMaterial,
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt', 'decrypt']
        );
    }
    
    static async encryptData(plaintext, password) {
        try {
            const salt = crypto.getRandomValues(new Uint8Array(16));
            const iv = crypto.getRandomValues(new Uint8Array(12));
            
            const key = await this.generateKey(password, salt);
            
            const enc = new TextEncoder();
            const encryptedData = await crypto.subtle.encrypt(
                {
                    name: 'AES-GCM',
                    iv: iv
                },
                key,
                enc.encode(plaintext)
            );
            
            // Combine salt, iv, and encrypted data
            const result = new Uint8Array(salt.length + iv.length + encryptedData.byteLength);
            result.set(salt, 0);
            result.set(iv, salt.length);
            result.set(new Uint8Array(encryptedData), salt.length + iv.length);
            
            // Return Base64 encoded result
            let binary = '';
            for (let i = 0; i < result.length; i++) {
                binary += String.fromCharCode(result[i]);
            }
            return btoa(binary);
        } catch (error) {
            throw new Error(`Encryption failed: ${error.message}`);
        }
    }
    
    static async decryptData(cipherText, password) {
        try {
            // Handle both Base64 and hex inputs
            let data;
            
            // Check if input is hex (contains only hex characters)
            if (/^[a-f0-9]+$/i.test(cipherText) && cipherText.length % 2 === 0) {
                // Convert hex to bytes
                data = new Uint8Array(cipherText.length / 2);
                for (let i = 0; i < cipherText.length; i += 2) {
                    data[i/2] = parseInt(cipherText.substr(i, 2), 16);
                }
                // Convert bytes to Base64
                let binary = '';
                for (let i = 0; i < data.length; i++) {
                    binary += String.fromCharCode(data[i]);
                }
                cipherText = btoa(binary);
            }
            
            // Decode from Base64
            const binaryString = atob(cipherText);
            const dataArray = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                dataArray[i] = binaryString.charCodeAt(i);
            }
            
            // Extract components
            const salt = dataArray.slice(0, 16);
            const iv = dataArray.slice(16, 28);
            const encryptedContent = dataArray.slice(28);
            
            const key = await this.generateKey(password, salt);
            
            const decryptedData = await crypto.subtle.decrypt(
                {
                    name: 'AES-GCM',
                    iv: iv
                },
                key,
                encryptedContent
            );
            
            // Decode to text
            const dec = new TextDecoder();
            return dec.decode(decryptedData);
        } catch (error) {
            throw new Error(`Decryption failed: ${error.message}`);
        }
    }
    
    // Helper function to convert Base64 to hex
    static base64ToHex(base64) {
        try {
            const binaryString = atob(base64);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
        } catch (e) {
            console.error("Base64 to hex conversion error:", e);
            return base64;
        }
    }
    
    // Helper function to convert hex to Base64
    static hexToBase64(hex) {
        try {
            // Handle hex strings with odd length by padding with zero
            if (hex.length % 2 !== 0) {
                hex = '0' + hex;
            }
            
            const bytes = new Uint8Array(hex.length / 2);
            for (let i = 0; i < hex.length; i += 2) {
                bytes[i/2] = parseInt(hex.substr(i, 2), 16);
            }
            let binary = '';
            for (let i = 0; i < bytes.length; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        } catch (e) {
            console.error("Hex to Base64 conversion error:", e);
            return hex;
        }
    }
}

// Make it globally available
window.SecVaultCrypto = SecVaultCrypto;
