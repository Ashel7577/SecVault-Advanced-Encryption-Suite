// Direct output protection - most aggressive fix
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const outputField = document.getElementById('output-text');
        if (!outputField) return;
        
        // Completely replace the output field with a new one
        const newValue = outputField.value;
        const newField = document.createElement('textarea');
        newField.id = 'output-text';
        newField.placeholder = 'Encrypted/Decrypted result...';
        newField.readOnly = true;
        newField.className = outputField.className;
        newField.style.cssText = outputField.style.cssText;
        
        // Copy all attributes
        for (let attr of outputField.attributes) {
            if (attr.name !== 'id') {
                newField.setAttribute(attr.name, attr.value);
            }
        }
        
        // Replace the old field
        outputField.parentNode.replaceChild(newField, outputField);
        
        // Override all possible ways to set the value
        const protectField = document.getElementById('output-text');
        let protectedValue = newValue || '';
        
        // Method 1: value property
        Object.defineProperty(protectField, 'value', {
            get: function() { return protectedValue; },
            set: function(val) { 
                protectedValue = val;
                protectField.textContent = val;
            }
        });
        
        // Method 2: innerHTML/textContent
        const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
        Object.defineProperty(protectField, 'innerHTML', {
            set: function(val) { 
                protectedValue = val;
                this.textContent = val;
            },
            get: function() { return originalInnerHTML.get.call(this); }
        });
        
        // Method 3: setAttribute
        const originalSetAttribute = protectField.setAttribute;
        protectField.setAttribute = function(name, value) {
            if (name === 'value') {
                protectedValue = value;
                this.textContent = value;
                return originalSetAttribute.call(this, 'value', value);
            }
            return originalSetAttribute.apply(this, arguments);
        };
        
        // Set initial value if we have one
        if (newValue) {
            protectField.value = newValue;
        }
    });
})();
