// Debug script to check element existence
document.addEventListener('DOMContentLoaded', function() {
    console.log("=== DEBUG INFO ===");
    console.log("Base64 output element exists:", !!document.getElementById('base64-output'));
    console.log("Base64 copy button exists:", !!document.getElementById('copy-base64'));
    console.log("Base64 section element:", document.querySelector('.base64-output-section'));
    console.log("==================");
});
