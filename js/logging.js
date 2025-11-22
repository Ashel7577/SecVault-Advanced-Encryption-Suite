class Logger {
    constructor() {
        this.logContainer = document.getElementById('log-container');
        this.logs = [];
        this.loadLogs();
    }
    
    static log(message, type = 'info') {
        if (!window.loggerInstance) {
            window.loggerInstance = new Logger();
        }
        
        window.loggerInstance.addLog(message, type);
    }
    
    addLog(message, type) {
        const timestamp = new Date();
        const logEntry = {
            id: Date.now(),
            timestamp: timestamp,
            message: message,
            type: type
        };
        
        this.logs.push(logEntry);
        this.saveLogs();
        this.displayLog(logEntry);
        
        // Limit logs to 1000 entries
        if (this.logs.length > 1000) {
            this.logs.shift();
        }
    }
    
    displayLog(logEntry) {
        const logElement = document.createElement('div');
        logElement.className = `log-entry log-${logEntry.type}`;
        logElement.innerHTML = `
            <span class="log-timestamp">[${this.formatTime(logEntry.timestamp)}]</span>
            <span class="log-message">${this.escapeHtml(logEntry.message)}</span>
        `;
        
        // Add to top of container
        this.logContainer.insertBefore(logElement, this.logContainer.firstChild);
    }
    
    formatTime(date) {
        return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    saveLogs() {
        try {
            localStorage.setItem('secvault-logs', JSON.stringify(this.logs));
        } catch (e) {
            // LocalStorage might be unavailable
            console.warn('Could not save logs to localStorage');
        }
    }
    
    loadLogs() {
        try {
            const savedLogs = localStorage.getItem('secvault-logs');
            if (savedLogs) {
                this.logs = JSON.parse(savedLogs);
                // Display logs in reverse order (newest first)
                this.logs.slice().reverse().forEach(log => this.displayLog(log));
            }
        } catch (e) {
            console.warn('Could not load logs from localStorage');
        }
    }
    
    clearLogs() {
        this.logs = [];
        this.logContainer.innerHTML = '';
        this.saveLogs();
        this.addLog('Logs cleared', 'info');
    }
    
    exportLogs() {
        if (this.logs.length === 0) {
            alert('No logs to export');
            return;
        }
        
        let logText = 'SecVault Activity Logs\n';
        logText += '======================\n\n';
        
        this.logs.forEach(log => {
            logText += `[${this.formatTime(new Date(log.timestamp))}] ${log.type.toUpperCase()}: ${log.message}\n`;
        });
        
        const blob = new Blob([logText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `secvault-logs-${new Date().toISOString().slice(0, 10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.addLog('Logs exported', 'info');
    }
    
    filterLogs(filterType) {
        // Clear current display
        this.logContainer.innerHTML = '';
        
        // Filter and display logs
        const filteredLogs = filterType === 'all' 
            ? this.logs 
            : this.logs.filter(log => log.type === filterType);
            
        // Display in reverse order
        filteredLogs.slice().reverse().forEach(log => this.displayLog(log));
    }
}

// Initialize logger and attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    window.loggerInstance = new Logger();
    
    // Attach log control event listeners
    const clearLogsBtn = document.getElementById('clear-logs');
    const exportLogsBtn = document.getElementById('export-logs');
    const logFilter = document.getElementById('log-filter');
    
    if (clearLogsBtn) {
        clearLogsBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all logs?')) {
                window.loggerInstance.clearLogs();
            }
        });
    }
    
    if (exportLogsBtn) {
        exportLogsBtn.addEventListener('click', () => {
            window.loggerInstance.exportLogs();
        });
    }
    
    if (logFilter) {
        logFilter.addEventListener('change', (e) => {
            window.loggerInstance.filterLogs(e.target.value);
        });
    }
});
