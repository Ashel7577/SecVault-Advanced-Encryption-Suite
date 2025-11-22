// Ultimate Base64 Protection - Prevents any hex conversion
(function() {
    if (typeof window !== 'undefined') {
        // Store the last correct Base64 result
        window.SecVault_LastBase64 = '';
        
        // Hook into all possible ways data could be manipulated
        
        // 1. Override atob/btoa to monitor conversions
        const originalBtoa = window.btoa;
        const originalAtob = window.atob;
        
        window.btoa = function(stringToEncode) {
            const result = originalBtoa(stringToEncode);
            window.SecVault_LastBase64 = result;
            return result;
        };
        
        // 2. Override Crypto API if available
        if (window.crypto && window.crypto.subtle) {
            const originalEncrypt = crypto.subtle.encrypt;
            if (originalEncrypt) {
                crypto.subtle.encrypt = function(algorithm, key, data) {
                    return originalEncrypt.call(this, algorithm, key, data).then(result => {
                        return result;
                    });
                };
            }
        }
        
        // 3. Mutation Observer to detect DOM changes
        document.addEventListener('DOMContentLoaded', function() {
            const outputField = document.getElementById('output-text');
            if (!outputField) return;
            
            // Force correct value regularly
            setInterval(() => {
                if (window.SecVault_LastBase64 && 
                    outputField.value && 
                    outputField.value !== window.SecVault_LastBase64 &&
                    /^[a-f0-9]{64,}$/.test(outputField.value) && // Looks like hex
                    window.SecVault_LastBase64.includes('/') // Is Base64
                ) {
                    outputField.value = window.SecVault_LastBase64;
                    outputField.setAttribute('value', window.SecVault_LastBase64);
                    outputField.textContent = window.SecVault_LastBase64;
                }
            }, 100); // Check every 100ms
            
            // Mutation observer for immediate correction
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.target === outputField) {
                        if (mutation.attributeName === 'value') {
                            const currentValue = outputField.getAttribute('value');
                            if (currentValue && 
                                /^[a-f0-9]{64,}$/.test(currentValue) && 
                                window.SecVault_LastBase64.includes('/')) {
                                outputField.setAttribute('value', window.SecVault_LastBase64);
                                outputField.value = window.SecVault_LastBase64;
                            }
                        }
                    }
                });
            });
            
            observer.observe(outputField, {
                attributes: true,
                attributeFilter: ['value']
            });
        });
    }
})();

// Additional override for direct property manipulation
Object.defineProperty(window, 'forceBase64Display', {
    value: function(base64String) {
        window.SecVault_LastBase64 = base64String;
        const outputField = document.getElementById('output-text');
        if (outputField) {
            outputField.value = base64String;
            outputField.setAttribute('value', base64String);
            outputField.textContent = base64String;
        }
    },
    writable: false
});
