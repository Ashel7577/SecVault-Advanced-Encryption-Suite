class FileEncryptionManager {
    constructor() {
        this.initElements();
        this.attachEventListeners();
        this.currentFile = null;
    }
    
    initElements() {
        this.dropArea = document.getElementById('drop-area');
        this.fileInput = document.getElementById('file-input');
        this.fileSelectBtn = document.getElementById('file-select-btn');
        this.fileName = document.getElementById('file-name');
        this.fileSize = document.getElementById('file-size');
        this.fileType = document.getElementById('file-type');
        this.filePassword = document.getElementById('file-password');
        this.fileAlgorithm = document.getElementById('file-algorithm');
        this.encryptFileBtn = document.getElementById('encrypt-file-btn');
        this.decryptFileBtn = document.getElementById('decrypt-file-btn');
        this.fileProgress = document.getElementById('file-progress').querySelector('.progress-fill');
        this.progressText = document.getElementById('progress-text');
    }
    
    attachEventListeners() {
        // File selection events
        this.fileSelectBtn.addEventListener('click', () => this.fileInput.click());
        this.fileInput.addEventListener('change', (e) => this.handleFileSelect(e.target.files[0]));
        this.dropArea.addEventListener('dragover', (e) => this.handleDragOver(e));
        this.dropArea.addEventListener('drop', (e) => this.handleDrop(e));
        
        // Encryption/decryption events
        this.encryptFileBtn.addEventListener('click', () => this.encryptFile());
        this.decryptFileBtn.addEventListener('click', () => this.decryptFile());
    }
    
    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dropArea.classList.add('drag-over');
    }
    
    handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dropArea.classList.remove('drag-over');
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            this.handleFileSelect(e.dataTransfer.files[0]);
        }
    }
    
    handleFileSelect(file) {
        if (!file) return;
        
        this.currentFile = file;
        this.fileName.textContent = file.name;
        this.fileSize.textContent = this.formatFileSize(file.size);
        this.fileType.textContent = file.type || 'Unknown';
        
        Logger.log(`File selected: ${file.name} (${this.formatFileSize(file.size)})`, 'info');
    }
    
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    updateProgress(percent, text) {
        this.fileProgress.style.width = `${percent}%`;
        this.progressText.textContent = text;
    }
    
    async encryptFile() {
        if (!this.currentFile) {
            alert('Please select a file first');
            return;
        }
        
        const password = this.filePassword.value;
        const algorithm = this.fileAlgorithm.value;
        
        if (!password) {
            alert('Please enter a password');
            return;
        }
        
        try {
            this.updateProgress(10, 'Reading file...');
            
            // Read file as array buffer
            const arrayBuffer = await this.readFileAsArrayBuffer(this.currentFile);
            this.updateProgress(30, 'Encrypting data...');
            
            // Convert to base64 for encryption
            const uint8Array = new Uint8Array(arrayBuffer);
            let binaryString = '';
            for (let i = 0; i < uint8Array.length; i++) {
                binaryString += String.fromCharCode(uint8Array[i]);
            }
            const fileContentBase64 = btoa(binaryString);
            
            // Encrypt the content
            const encryptedContent = await SecVaultCrypto.encryptData(fileContentBase64, password, algorithm);
            this.updateProgress(80, 'Preparing download...');
            
            // Create downloadable file
            const blob = new Blob([encryptedContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            
            // Trigger download
            const a = document.createElement('a');
            a.href = url;
            a.download = `${this.currentFile.name}.encrypted`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            this.updateProgress(100, 'Encryption completed!');
            Logger.log(`File encrypted: ${this.currentFile.name}`, 'encryption');
            
            setTimeout(() => {
                this.updateProgress(0, 'Ready');
            }, 3000);
            
        } catch (error) {
            this.updateProgress(0, `Error: ${error.message}`);
            Logger.log(`File encryption failed: ${error.message}`, 'error');
            alert(`Encryption failed: ${error.message}`);
        }
    }
    
    async decryptFile() {
        if (!this.currentFile) {
            alert('Please select a file first');
            return;
        }
        
        const password = this.filePassword.value;
        const algorithm = this.fileAlgorithm.value;
        
        if (!password) {
            alert('Please enter a password');
            return;
        }
        
        // Check if file has .encrypted extension
        if (!this.currentFile.name.endsWith('.encrypted')) {
            if (!confirm('This file doesn\'t have the .encrypted extension. Are you sure you want to proceed with decryption?')) {
                return;
            }
        }
        
        try {
            this.updateProgress(10, 'Reading encrypted file...');
            
            // Read encrypted file
            const encryptedContent = await this.readFileAsText(this.currentFile);
            this.updateProgress(40, 'Decrypting data...');
            
            // Decrypt the content
            const decryptedContent = await SecVaultCrypto.decryptData(encryptedContent, password, algorithm);
            this.updateProgress(80, 'Preparing download...');
            
            console.log("Decrypted content type:", typeof decryptedContent);
            console.log("Decrypted content first 100 chars:", decryptedContent.substring(0, 100));
            console.log("Is valid Base64?", /^[A-Za-z0-9+/=]+$/.test(decryptedContent));
            
            // The decrypted content should be the base64 string we encrypted
            try {
                const binaryString = atob(decryptedContent);
                const byteArray = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                    byteArray[i] = binaryString.charCodeAt(i);
                }
            } catch (atobError) {
                console.error("atob failed:", atobError);
                console.error("Decrypted content:", decryptedContent);
                throw new Error(`Cannot decode decrypted data. It may not be in Base64 format. Error: ${atobError.message}`);
            }
            
            // Create downloadable file
            const blob = new Blob([byteArray], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            
            // Determine original filename
            let originalFileName = this.currentFile.name;
            if (originalFileName.endsWith('.encrypted')) {
                originalFileName = originalFileName.slice(0, -10); // Remove .encrypted
            } else {
                originalFileName = originalFileName + '.decrypted';
            }
            
            // Trigger download
            const a = document.createElement('a');
            a.href = url;
            a.download = originalFileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            this.updateProgress(100, 'Decryption completed!');
            Logger.log(`File decrypted: ${this.currentFile.name}`, 'decryption');
            
            setTimeout(() => {
                this.updateProgress(0, 'Ready');
            }, 3000);
            
        } catch (error) {
            this.updateProgress(0, `Error: ${error.message}`);
            Logger.log(`File decryption failed: ${error.message}`, 'error');
            alert(`Decryption failed: ${error.message}`);
        }
    }
    
    readFileAsArrayBuffer(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    }
    
    readFileAsText(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.fileEncryptionManager = new FileEncryptionManager();
});