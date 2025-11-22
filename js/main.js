// Main application controller
class SecVaultApp {
    constructor() {
        this.initElements();
        this.attachEventListeners();
        this.initTabs();
        Logger.log('SecVault application initialized', 'info');
    }
    
    initElements() {
        this.tabButtons = document.querySelectorAll('.tab-btn');
        this.tabContents = document.querySelectorAll('.tab-content');
    }
    
    attachEventListeners() {
        this.tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });
    }
    
    initTabs() {
        // Set first tab as active by default
        if (this.tabButtons.length > 0) {
            this.switchTab(this.tabButtons[0].dataset.tab);
        }
    }
    
    switchTab(tabName) {
        // Hide all tab contents
        this.tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Remove active class from all buttons
        this.tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected tab content
        const tabContent = document.getElementById(`${tabName}-tab`);
        if (tabContent) {
            tabContent.classList.add('active');
        }
        
        // Set active class on clicked button
        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        Logger.log(`Switched to ${tabName} tab`, 'info');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.secVaultApp = new SecVaultApp();
    
    // Add version info to footer
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent += ` | Loaded: ${new Date().toLocaleString()}`;
    }
});

// Global error handling
window.addEventListener('error', (e) => {
    Logger.log(`Global error: ${e.message} at ${e.filename}:${e.lineno}`, 'error');
});

// Security warning for production use
Logger.log('WARNING: This is a demonstration tool. For production use, implement additional security measures.', 'warning');
