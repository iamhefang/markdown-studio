import { app, BrowserWindow, Menu } from "electron";
import menus from "./main/menus";

let window: BrowserWindow;
app.once("ready", function () {
    Menu.setApplicationMenu(menus(app));
    window = new BrowserWindow({
        minWidth: 800, minHeight: 600,
        show: false
    });
    window.loadURL(`file://${__dirname}/renderer/index.html`).then(() => window.show());
    // window.once("ready-to-show", function () {
    //     window.show();
    // })
});