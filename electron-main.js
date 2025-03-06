const { app, BrowserWindow, ipcMain } = require('electron');
const { fork } = require('child_process');
const path = require('path');
const { loadConfig, saveConfig } = require('./config-manager');

let mainWindow;
let serverProcess;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // 启动Node服务
  serverProcess = fork(path.join(__dirname, 'server.js'), {
    env: { ...process.env, ELECTRON_MODE: 'true' }
  });

  mainWindow.loadFile('index.html');
});

// 配置通信处理
ipcMain.handle('get-config', async () => loadConfig());
ipcMain.handle('save-config', (event, config) => saveConfig(config));