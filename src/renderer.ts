import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import * as os from 'os';
import * as pty from 'node-pty';

// Initialize xterm.js
const term = new Terminal({
    cursorBlink: true,
    theme: {
        background: '#1e1e1e',
        foreground: '#ffffff'
    }
});

// Create and load FitAddon
const fitAddon = new FitAddon();
term.loadAddon(fitAddon);

// Attach terminal to DOM
term.open(document.getElementById('terminal')!);
fitAddon.fit();

// Initialize node-pty
const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: term.cols,
    rows: term.rows,
    cwd: process.env.HOME,
    env: process.env as { [key: string]: string }
});

// Handle terminal input
term.onData(data => {
    ptyProcess.write(data);
});

// Handle terminal output
ptyProcess.onData(data => {
    term.write(data);
});

// Handle window resize
window.addEventListener('resize', () => {
    fitAddon.fit();
    ptyProcess.resize(term.cols, term.rows);
});

// Initial fit
fitAddon.fit(); 