// Fix for Base64 to Hex conversion issue
(function() {
    // Wait for DOM to load
    document.addEventListener('DOMContentLoaded', function() {
        const outputField = document.getElementById('output-text');
        if (outputField) {
            let actualValue = '';
            
            // Override the value property to prevent hex conversion
            Object.defineProperty(outputField, 'value', {
                get: function() {
                    return actualValue;
                },
                set: function(val) {
                    actualValue = val;
                    // Ensure the DOM attribute is updated
                    this.setAttribute('value', val);
                    // Update the visible content
                    this.textContent = val;
                }
            });
            
            // Also override setAttribute for 'value'
            const originalSetAttribute = outputField.setAttribute;
            outputField.setAttribute = function(name, value) {
                if (name === 'value') {
                    actualValue = value;
                    return originalSetAttribute.call(this, name, value);
                }
                return originalSetAttribute.apply(this, arguments);
            };
        }
    });
})();
