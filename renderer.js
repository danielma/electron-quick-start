// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;

const path = require('path')
const url = require('url')

function newTab() {
  const win = new BrowserWindow({ tabbingIdentifier: 'window', show: false })

  win.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file:",
    slashes: true,
  }))

  const currentWindow = remote.getCurrentWindow()
  currentWindow.addTabbedWindow(win)
  win.show()
}

window.newTab = newTab
