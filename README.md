# Electron Terminal

A modern terminal emulator built with Electron and xterm.js.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- For Windows users: Visual Studio Build Tools with Windows 10 SDK
- For Linux users: Python and `make` (`sudo apt-get install python make` on Ubuntu)

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Development

To run the application in development mode:

```bash
npm run dev
```

This will start the TypeScript compiler in watch mode and launch the Electron application.

## Building

To build the application:

```bash
npm run build
```

Then to start the application:

```bash
npm start
```

## Features

- Modern terminal emulator with xterm.js
- Automatic window resizing
- Cross-platform support (Windows, macOS, Linux)
- PowerShell on Windows, Bash on Unix-like systems

## License

MIT