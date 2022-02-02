const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')



//CREATING ELECTRON WINDOW 
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }  
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.handle('quit-app', () => {
  app.quit();
});
//all the rpc shit is in the preload 
