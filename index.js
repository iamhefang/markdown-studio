"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let window;
const macMenu = process.platform === "darwin" ? [{
        label: electron_1.app.name,
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
electron_1.app.once("ready", function () {
    let menu = electron_1.Menu.buildFromTemplate([
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
                }
            ]
        }
    ]);
    electron_1.Menu.setApplicationMenu(menu);
    window = new electron_1.BrowserWindow({
        minWidth: 800, minHeight: 600,
        show: false
    });
    window.loadURL(`file://${__dirname}/app/index.html`);
    window.once("ready-to-show", function () {
        window.show();
    });
});
