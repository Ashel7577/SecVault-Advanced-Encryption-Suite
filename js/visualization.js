class VisualizationManager {
    constructor() {
        this.initElements();
        this.attachEventListeners();
        this.currentAlgorithm = 'aes';
    }
    
    initElements() {
        this.algoButtons = document.querySelectorAll('.algo-btn');
        this.algoVisualization = document.getElementById('algo-visualization');
    }
    
    attachEventListeners() {
        this.algoButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.switchAlgorithm(e.target.dataset.algo));
        });
    }
    
    switchAlgorithm(algorithm) {
        this.currentAlgorithm = algorithm;
        
        // Update active button
        this.algoButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-algo="${algorithm}"]`).classList.add('active');
        
        // Update visualization
        this.updateVisualization();
    }
    
    updateVisualization() {
        let content = '';
        
        switch (this.currentAlgorithm) {
            case 'aes':
                content = this.getAESVisualization();
                break;
            case 'rsa':
                content = this.getRSAVisualization();
                break;
            case 'hash':
                content = this.getHashVisualization();
                break;
            default:
                content = '<p>Select an algorithm to visualize</p>';
        }
        
        this.algoVisualization.innerHTML = content;
    }
    
    getAESVisualization() {
        return `
            <div class="algo-detail">
                <h3>AES (Advanced Encryption Standard)</h3>
                <div class="algo-description">
                    <p>AES is a symmetric encryption algorithm widely used to secure sensitive data. It operates on fixed block sizes of 128 bits and supports key sizes of 128, 192, or 256 bits.</p>
                </div>
                <div class="aes-process">
                    <h4>Encryption Process</h4>
                    <div class="process-steps">
                        <div class="step">
                            <div class="step-num">1</div>
                            <div class="step-info">
                                <h5>Key Expansion</h5>
                                <p>The original key is expanded to generate a series of round keys</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-num">2</div>
                            <div class="step-info">
                                <h5>Initial Round</h5>
                                <p>AddRoundKey - XOR plaintext with first round key</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-num">3</div>
                            <div class="step-info">
                                <h5>Main Rounds (9, 11, or 13)</h5>
                                <p>Each round consists of four transformations:
                                <ul>
                                    <li>SubBytes - Non-linear substitution</li>
                                    <li>ShiftRows - Transposition</li>
                                    <li>MixColumns - Diffusion</li>
                                    <li>AddRoundKey - XOR with round key</li>
                                </ul>
                                </p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-num">4</div>
                            <div class="step-info">
                                <h5>Final Round</h5>
                                <p>SubBytes → ShiftRows → AddRoundKey</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="security-info">
                    <h4>Security Features</h4>
                    <ul>
                        <li>Key size options: 128, 192, or 256 bits</li>
                        <li>Block size: 128 bits</li>
                        <li>Resistance to known cryptanalytic attacks</li>
                        <li>Efficient implementation in both software and hardware</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    getRSAVisualization() {
        return `
            <div class="algo-detail">
                <h3>RSA (Rivest-Shamir-Adleman)</h3>
                <div class="algo-description">
                    <p>RSA is an asymmetric encryption algorithm that uses a pair of keys: a public key for encryption and a private key for decryption.</p>
                </div>
                <div class="rsa-process">
                    <h4>Key Generation Process</h4>
                    <div class="process-steps">
                        <div class="step">
                            <div class="step-num">1</div>
                            <div class="step-info">
                                <h5>Choose Primes</h5>
                                <p>Select two large prime numbers p and q</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-num">2</div>
                            <div class="step-info">
                                <h5>Compute n</h5>
                                <p>Calculate n = p × q (modulus)</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-num">3</div>
                            <div class="step-info">
                                <h5>Compute φ(n)</h5>
                                <p>Calculate φ(n) = (p-1) × (q-1)</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-num">4</div>
                            <div class="step-info">
                                <h5>Select e</h5>
                                <p>Choose public exponent e such that 1 < e < φ(n) and gcd(e, φ(n)) = 1</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-num">5</div>
                            <div class="step-info">
                                <h5>Compute d</h5>
                                <p>Calculate private exponent d such that (d × e) ≡ 1 (mod φ(n))</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="security-info">
                    <h4>Security Features</h4>
                    <ul>
                        <li>Based on the difficulty of factoring large integers</li>
                        <li>Public key can be shared openly</li>
                        <li>Used for both encryption and digital signatures</li>
                        <li>Key sizes typically 1024-4096 bits</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    getHashVisualization() {
        return `
            <div class="algo-detail">
                <h3>Hash Functions</h3>
                <div class="algo-description">
                    <p>Cryptographic hash functions take an input (message) and produce a fixed-size output (hash value) that appears random.</p>
                </div>
                <div class="hash-process">
                    <h4>Hash Function Properties</h4>
                    <div class="properties-grid">
                        <div class="property">
                            <h5>Deterministic</h5>
                            <p>Same input always produces same output</p>
                        </div>
                        <div class="property">
                            <h5>Quick Computation</h5>
                            <p>Efficient to compute hash value</p>
                        </div>
                        <div class="property">
                            <h5>Pre-image Resistance</h5>
                            <p>Computationally infeasible to reverse</p>
                        </div>
                        <div class="property">
                            <h5>Small Changes</h5>
                            <p>Small input change produces large output change</p>
                        </div>
                        <div class="property">
                            <h5>Collision Resistance</h5>
                            <p>Hard to find two inputs with same hash</p>
                        </div>
                    </div>
                </div>
                <div class="common-hashes">
                    <h4>Common Hash Algorithms</h4>
                    <div class="hash-list">
                        <div class="hash-item">
                            <h5>MD5</h5>
                            <p>128-bit hash, now considered insecure</p>
                        </div>
                        <div class="hash-item">
                            <h5>SHA-1</h5>
                            <p>160-bit hash, deprecated due to vulnerabilities</p>
                        </div>
                        <div class="hash-item">
                            <h5>SHA-256</h5>
                            <p>256-bit hash, part of SHA-2 family, widely used</p>
                        </div>
                        <div class="hash-item">
                            <h5>SHA-3</h5>
                            <p>Latest standard, based on different design principle</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.visualizationManager = new VisualizationManager();
});
