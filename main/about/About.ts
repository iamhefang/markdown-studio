import * as Electron from "electron";
import { makeUrl } from "../../common/utils";

export default {
    show(parent: Electron.BrowserWindow) {
        const modal = new Electron.BrowserWindow({
            parent: parent,
            resizable: false,
            show: false,
            height: 300, width: 400,
            maximizable: false,
            minimizable: false,
            modal: true,
            title: "关于",
        })
        modal.setMenu(null)
        modal.loadURL(makeUrl('about/index.html')).then(() => modal.show())
    }
}
