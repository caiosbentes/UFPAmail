var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var globalShortcut = require('global-shortcut');

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// TODO: Determine path to Pepper flash plugin, rather than hardcoding it
var pepperFlashPluginPath = '/usr/lib/pepperflashplugin-nonfree/libpepflashplayer.so'
app.commandLine.appendSwitch('ppapi-flash-path', pepperFlashPluginPath);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // don't quit until user explicitly asks for it
  app.quit();
});

// Prevent multiple instances
var shouldQuit = app.makeSingleInstance(function(commandLine, workingDirectory) {
  // Someone tried to run a second instance, we should focus our window
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
  return true;
});

if (shouldQuit) {
  app.quit();
  return;
}

app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: true,
    icon: "icon.png",
    autoHideMenuBar: true,
    darkTheme: true,
    plugin:true,
    'web-preferences': {
        plugins: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  console.log("APP READY")


});
