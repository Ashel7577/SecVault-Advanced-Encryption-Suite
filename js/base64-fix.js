// Simple Base64 output setter
function setBase64Output(base64Value) {
    // Try multiple methods to find and set the Base64 output
    const methods = [
        () => document.getElementById('base64-output'),
        () => document.querySelector('#base64-output'),
        () => document.querySelector('textarea[id="base64-output"]')
    ];
    
    for (let method of methods) {
        try {
            const element = method();
            if (element) {
                element.value = base64Value;
                console.log("Base64 output set successfully");
                return true;
            }
        } catch (e) {
            continue;
        }
    }
    
    console.error("Failed to set Base64 output - element not found");
    return false;
}

// Make it globally accessible
window.setBase64Output = setBase64Output;
