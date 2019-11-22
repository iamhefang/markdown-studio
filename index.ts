import { app, BrowserWindow, Menu } from "electron";
import menus from "./main/menus";
import { makeUrl } from "./common/utils";

let window: BrowserWindow;
app.once("ready", function () {
    window = new BrowserWindow({
        minWidth: 800, minHeight: 600,
        show: false
    });
    window.addListener("page-title-updated", (ev, title) => window.setTitle(title))
    window.loadURL(makeUrl('index.html')).then(() => window.show());

    Menu.setApplicationMenu(menus(app));
});

app.on("window-all-closed", () => app.quit())
