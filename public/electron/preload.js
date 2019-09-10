window.ipcRenderer = require("electron").ipcRenderer;
window.shell = require("electron").shell;
window.isDev = require("electron-is-dev");
window.electronApp = require('electron').app;
const ElectronStore = require("./store");
const eleStore = new ElectronStore(require("./store-defaults"));
window.electronStore = eleStore;
window.electronRemote = require('electron').remote;