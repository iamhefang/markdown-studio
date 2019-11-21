import * as Electron from "electron";
import { app, MenuItemConstructorOptions } from "electron";
import Menu = Electron.Menu;
import App = Electron.App;

const macMenu: MenuItemConstructorOptions[] = process.platform === "darwin" ? [{
    label: app.name,
    submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        // { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
    ]
}] : [];

let menuCache: Menu;
export default function menus(app: App): Menu {
    if (menuCache) return menuCache;
    return menuCache = Menu.buildFromTemplate([
        ...macMenu,
        {
            label: "文件(&F)",
            submenu: [
                {
                    label: "新建(&N)"
                },
                {
                    label: "打开(&O)"
                },
                {
                    label: "退出(&Q)",
                    role: "quit"
                }
            ]
        },
        {
            label: "编辑(&E)",
            submenu: [
                {
                    label: "撤销(&U)",
                    role: "undo"
                },
                {
                    label: "重做(&R)",
                    role: "redo"
                },
                {
                    type: "separator"
                },
                {
                    label: "复制(&C)",
                    role: "copy"
                },
                {
                    label: "剪切(&X)",
                    role: "cut"
                },
                {
                    label: "粘贴(&V)",
                    role: "paste"
                }
            ]
        }
    ])
}