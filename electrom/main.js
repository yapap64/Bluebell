const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
// Teclas multimedia del teclado (play, pausa, siguiente, anterior)
app.commandLine.appendSwitch('enable-features', 'HardwareMediaKeyHandling,MediaSessionService');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
function crear() {
  const w = new BrowserWindow({
    width: 1100, height: 720, minWidth: 380, minHeight: 560,
    backgroundColor: '#101126', autoHideMenuBar: true,
    icon: path.join(__dirname, '..', 'www', 'icon-512.png'),
    webPreferences: { contextIsolation: true }
  });
  Menu.setApplicationMenu(null);
  w.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
}
app.whenReady().then(crear);
app.on('window-all-closed', () => app.quit());
