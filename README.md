SecVault: Advanced Encryption Suite

A comprehensive, web-based AES-GCM encryption and decryption utility designed to demonstrate advanced proficiency in client-side cryptography, modern web development, and secure coding practices. This project is a key component of my cybersecurity portfolio.

Check out : https://encyption-suite.22web.org/?i=2

Core Features

*   Robust Cryptography: Implements the secure AES-GCM (Advanced Encryption Standard - Galois/Counter Mode) algorithm, utilizing the browser's native subtle crypto API for high-performance, secure operations.
*   Text and File Encryption: Supports encryption and decryption for both arbitrary text input and file uploads.
*   Dual Output Format: Provides encrypted output in both Hexadecimal and Base64 formats for flexibility and interoperability.
*   Real-time Process Visualization: Features an interactive visualization panel that breaks down the steps of the encryption process (e.g., input, algorithm, output), enhancing user understanding.
*   Secure Implementation: Includes essential security considerations like PBKDF2 (Password-Based Key Derivation Function 2) for key stretching and robust password handling.
*   System Logging Panel: A dedicated panel for logging all major cryptographic actions (encrypt, decrypt, file I/O, errors), demonstrating a clear audit trail.
*   Sleek Dark Theme UI: Designed with a modern, dark-themed, and responsive user interface for an excellent user experience.

Technology Stack

| Component | Technology | Role |
| :--- | :--- | :--- |
| Frontend | HTML5, CSS3, JavaScript (ES6+) | Core application structure and styling. |
| Cryptography | Web Crypto API (`crypto.subtle`) | Client-side, native-speed, secure encryption using AES-GCM. |
| Build & Deploy | Command-Line Tools (`zip`, `cat`, etc.) | Configuration and final packaging for web-publish readiness. |

Setup and Installation (MacBook M4)

The application is entirely client-side, making deployment straightforward.

Prerequisites

You need a modern web browser (Chrome, Firefox, Safari) and a stable development environment.

Command-Line Preparation

1.  Clone or Download Project: Ensure all project files (index.html, js/, css/, etc.) are in a single directory, e.g., encryption-suite.

    ash@MacBook-Air ~ % cd encryption-suite

2.  Verify Project Structure (Optional):
    ash@MacBook-Air encryption-suite % ls -F
    css/          favicon.ico   index.html    js/           README.md

3.  Run Locally (Easiest Method):
    Open the index.html file directly in your web browser.

    ash@MacBook-Air encryption-suite % open index.html

Web Publishing

The project is built to be "web-publish ready." Simply upload the entire contents of the encryption-suite directory (or the final `secvault-final-working.zip`) to any web server (e.g., GitHub Pages, Netlify, Apache).

Usage

1.  Navigate to the Text Encryption tab.
2.  Enter the plaintext (e.g., `ashel`) into the Input Text field.
3.  Enter a strong password (e.g., `test`) into the Password field.
4.  Click the Encrypt button.
5.  Observe the results:
    *   Output (Hex): Shows the main encrypted result in hexadecimal format.
    *   Base64 Format: Directly displays the AES-GCM encrypted output in Base64 format.
6.  Check the Process Visualization and System Logs tabs for real-time audit and visual feedback.

---

**Author:** [Your Name/Handle Here]
**Built For:** Cybersecurity Internship Portfolio Showcase
