const { app, BrowserWindow, session } = require("electron");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      partition: "persist:sitePoller",
    },
  });

  if (process.argv.length > 2 && process.argv[2] == "clear") {
    clearCurrentSession();
  }

  mainWindow.loadURL("YOUR_WEBSITE_HERE");

  mainWindow.webContents.on("did-finish-load", () => {
    // Do something
  });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

function clearCurrentSession() {
  let persistSession = session.fromPartition("persist:sitePoller");
  persistSession.clearStorageData([], function (data) {});
}
