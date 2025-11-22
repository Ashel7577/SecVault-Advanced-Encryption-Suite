/**
 * Main App Logic for SecVault Encryption Suite
 */

// Update visualization function to show Base64 output
function updateTextVisualization(isEncryption, algorithm, inputData, outputData, password = '') {
    const container = document.getElementById('text-visualization');
    if (!container) return;
    
    // Show the ACTUAL Base64 output, not hex
    container.innerHTML = `
        <div class="process-steps">
            <div class="step">
                <div class="step-label">Input Data</div>
                <div class="step-content">${truncateString(inputData, 30)}</div>
            </div>
            <div class="step-arrow">↓</div>
            <div class="step">
                <div class="step-label">Algorithm: ${algorithm}</div>
                <div class="step-content">
                    <div>Key Derivation: PBKDF2</div>
                    <div>Iterations: 100,000</div>
                    <div>Hash: SHA-256</div>
                </div>
            </div>
            <div class="step-arrow">↓</div>
            <div class="step">
                <div class="step-label">Encrypted Output</div>
                <div class="step-content">${truncateString(outputData, 50)}</div> <!-- SHOW ACTUAL Base64 OUTPUT -->
            </div>
        </div>
    `;
}

function truncateString(str, maxLength) {
    if (!str) return '';
    if (str.length <= maxLength) return str;
    return str.substring(0, maxLength) + '...';
}

// Make sure the output textbox shows the correct Base64
function displayOutput(encryptedData) {
    const outputField = document.getElementById('output-text');
    if (outputField) {
        outputField.value = encryptedData; // This should be short Base64 now
    }
}
