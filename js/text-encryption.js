/**
 * Text Encryption Manager - Fixed Base64 Output
 */
class TextEncryptionManager {
    constructor() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }
    
    init() {
        this.initElements();
        this.attachEventListeners();
    }
    
    initElements() {
        this.inputText = document.getElementById('input-text');
        this.outputText = document.getElementById('output-text');
        this.base64Output = document.getElementById('base64-output');
        this.textPassword = document.getElementById('text-password');
        this.encryptBtn = document.getElementById('encrypt-text-btn');
        this.decryptBtn = document.getElementById('decrypt-text-btn');
        this.copyBtn = document.getElementById('copy-output');
        this.copyBase64Btn = document.getElementById('copy-base64');
        this.downloadBtn = document.getElementById('download-output');
        this.visualizationContainer = document.getElementById('text-visualization');
    }
    
    attachEventListeners() {
        if (this.encryptBtn) this.encryptBtn.addEventListener('click', () => this.encryptText());
        if (this.decryptBtn) this.decryptBtn.addEventListener('click', () => this.decryptText());
        if (this.copyBtn) this.copyBtn.addEventListener('click', () => this.copyOutput());
        if (this.copyBase64Btn) this.copyBase64Btn.addEventListener('click', () => this.copyBase64Output());
        if (this.downloadBtn) this.downloadBtn.addEventListener('click', () => this.downloadOutput());
    }
    
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    async encryptText() {
        const text = this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!text || !password) {
            alert('Please enter both text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // This returns Base64
            const encryptedBase64 = await SecVaultCrypto.encryptData(text, password);
            
            // Convert to hex for main output
            const encryptedHex = SecVaultCrypto.base64ToHex(encryptedBase64);
            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set Base64 output using our robust setter
            if (typeof setBase64Output === 'function') {
                setBase64Output(encryptedBase64);
            } else {
                // Fallback to direct setting
                const b64El = document.getElementById('base64-output');
                if (b64El) b64El.value = encryptedBase64;
            }            
            // Set hex output (this works)
            if (this.outputText) {
                this.outputText.value = encryptedHex;
            }
            
            // FIX: Explicitly set Base64 output
            // Try multiple methods to find Base64 element
            let base64Element = document.getElementById('base64-output');
            if (!base64Element) {
                base64Element = document.querySelector('#base64-output');
            }
            if (!base64Element) {
                console.error("Base64 element not found!");
            } else {
                base64Element.value = encryptedBase64;
                base64Element.placeholder = "Successfully set!";  // Debug
            }            if (base64Element) {
                base64Element.value = encryptedBase64;
            }
            
            this.showVisualization(true, 'AES-GCM', text, encryptedHex, encryptedBase64);
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
            
            if (window.Logger) {
                Logger.log('Text encrypted successfully', 'encryption');
            }
            
        } catch (error) {
            console.error("Encryption error:", error);
            if (window.Logger) {
                Logger.log(`Encryption failed: ${error.message}`, 'error');
            }
            alert(`Encryption failed: ${error.message}`);
        }
    }
    
    async decryptText() {
        const encryptedHex = this.outputText?.value || this.inputText?.value || '';
        const password = this.textPassword?.value || '';
        
        if (!encryptedHex || !password) {
            alert('Please enter both encrypted text and password');
            return;
        }
        
        try {
            if (typeof SecVaultCrypto === 'undefined') {
                throw new Error('Encryption system not loaded');
            }
            
            // Convert hex to Base64 for decryption
            const encryptedBase64 = SecVaultCrypto.hexToBase64(encryptedHex);
            
            // Decrypt using Base64
            const decrypted = await SecVaultCrypto.decryptData(encryptedBase64, password);
            
            if (this.inputText) this.inputText.value = decrypted;
            
            // Clear outputs when decrypting
            if (this.outputText) {
                this.outputText.value = '';
            }
            if (document.getElementById('base64-output')) {
                document.getElementById('base64-output').value = '';
            }
            
            // Show visualization
            this.showVisualization(false, 'AES-GCM', encryptedHex, decrypted, '');
            
            if (window.Logger) {
                Logger.log('Text decrypted successfully', 'decryption');
            }
            
        } catch (error) {
            console.error("Decryption error:", error);
            if (window.Logger) {
                Logger.log(`Decryption failed: ${error.message}`, 'error');
            }
            alert(`Decryption failed: ${error.message}`);
        }
    }
    
    showVisualization(isEncryption, algorithm, inputData, outputData, base64Data) {
        if (!this.visualizationContainer) return;
        
        // Show both hex and Base64 in visualization
        this.visualizationContainer.innerHTML = `
            <div class="process-viz">
                <div class="viz-step">
                    <h4>${isEncryption ? 'Input Data' : 'Encrypted Data'}</h4>
                    <div class="data-display">${this.truncateData(inputData)}</div>
                </div>
                <div class="viz-arrow">↓</div>
                <div class="viz-step">
                    <h4>Algorithm: AES-GCM</h4>
                    <div class="algo-details">
                        <p>Key Derivation: PBKDF2</p>
                        <p>Iterations: 100,000</p>
                        <p>Hash: SHA-256</p>
                    </div>
                </div>
                <div class="viz-arrow">↓</div>
                <div class="viz-step">
                    <h4>${isEncryption ? 'Encrypted Output (Hex)' : 'Decrypted Output'}</h4>
                    <div class="data-display">${this.truncateData(outputData, 50)}</div>
                </div>
                <div class="viz-arrow">↓</div>
                <div class="viz-step">
                    <h4>Encrypted Output (Base64)</h4>
                    <div class="data-display">${this.truncateData(base64Data, 50)}</div>
                </div>
            </div>
        `;
    }
    
    truncateData(data, maxLength = 30) {
        if (!data) return 'No data';
        if (data.length <= maxLength) return data;
        return data.substring(0, maxLength) + '...';
    }
    
    copyOutput() {
        if (this.outputText && this.outputText.value) {
            this.outputText.select();
            document.execCommand('copy');
            if (window.Logger) {
                Logger.log('Hex output copied to clipboard', 'info');
            }
            if (this.copyBtn) {
                const originalText = this.copyBtn.textContent;
                this.copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    this.copyBtn.textContent = originalText;
                }, 2000);
            }
        }
    }
    
    copyBase64Output() {
        const base64El = document.getElementById('base64-output');
        if (base64El && base64El.value) {
            base64El.select();
            document.execCommand('copy');
            if (window.Logger) {
                Logger.log('Base64 output copied to clipboard', 'info');
            }
            if (this.copyBase64Btn) {
                const originalText = this.copyBase64Btn.textContent;
                this.copyBase64Btn.textContent = 'Copied!';
                setTimeout(() => {
                    this.copyBase64Btn.textContent = originalText;
                }, 2000);
            }
        }
    }
    
    downloadOutput() {
        const content = this.outputText ? this.outputText.value : '';
        if (content) {
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'encrypted.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            if (window.Logger) {
                Logger.log('Encrypted data downloaded', 'info');
            }
        }
    }
}

// Initialize immediately
window.textEncryptionManager = new TextEncryptionManager();
