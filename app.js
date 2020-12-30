var { app, BrowserWindow } = require("electron");

var mainWindow = null;

function loadMainWin() {
	mainWindow = new BrowserWindow({
		width: 850,
		height: 700
	});

	mainWindow.loadFile(`${__dirname}/index.html`);
	mainWindow.setMenuBarVisibility(false);
	// mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
	loadMainWin();

  	app.on('activate', function () {
    	if (BrowserWindow.getAllWindows().length === 0) loadMainWin();
  	});	
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});