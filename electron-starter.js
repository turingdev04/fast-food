

const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const urlExists = require('url-exists');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let loadWindow = null;
let mainWindow = null;
let app_url = 'http://localhost:3000';

const loadPromise = (app_url) => new Promise((resolve, reject) => {    
    let loading = true;

    
    while (loading) {
        urlExists(app_url, function(err, exists) {
            console.log("It's gone in");
            if (exists) {
                loading = false;
                console.log("It's great !!!!")
                resolve(app_url);
            }
        });
    }
    reject();
});

const loadingWindow = () => new Promise((resolve, reject) => {
    // Create the browser window.
    loadWindow = new BrowserWindow({
        width: 375, 
        height: 100, 
        frame: false, 
        transparent: false, 
        fullscreen: false, 
        alwaysOnTop:true
    });

    loadWindow.loadURL(path.join(__dirname, './load/index.html'));

    loadWindow.on('closed', function () {
        loadWindow = null
    })

    loadPromise(app_url).then(() => resolve()).catch(() => {});
});

const initMain = (app_url) => new Promise((resolve, rejetc) => {
   // Create the browser window.
   mainWindow = new BrowserWindow({width: 800, height: 600});

   mainWindow.loadURL(app_url);
   

   // Open the DevTools.
   mainWindow.webContents.openDevTools();

   // Emitted when the window is closed.
   mainWindow.on('closed', function () {
       // Dereference the window object, usually you would store windows
       // in an array if your app supports multi windows, this is the time
       // when you should delete the corresponding element.
       mainWindow = null
   })
   
   resolve();
});


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    loadingWindow().then(() => {
        initMain(app_url);
    }).catch(() => {})
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        loadingWindow();
    }
});

// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.