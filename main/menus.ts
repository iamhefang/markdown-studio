import * as Electron from "electron";
import { app, MenuItemConstructorOptions, systemPreferences } from "electron";
import * as pkg from "../package.json";
import About from "./about/About";
import Menu = Electron.Menu;
import App = Electron.App;

const macMenu: MenuItemConstructorOptions[] = process.platform === "darwin" ? [{
    label: app.name,
    submenu: [
        { role: 'about', label: `关于 ${pkg.displayName}` },
        { label: "设置", },
        { type: 'separator' },
        { role: 'services', label: "服务" },
        { type: 'separator' },
        { role: 'hide', label: "隐藏窗口" },
        { role: 'hideOthers', label: "隐藏其他窗口" },
        { role: 'unhide', label: "显示窗口" },
        { type: 'separator' },
        { role: 'quit', label: "退出" }
    ]
}] : [];

let menuCache: Menu;
export default function menus(app: App): Menu {
    if (menuCache) return menuCache;
    return menuCache = Menu.buildFromTemplate([
        ...macMenu,
        {
            label: "文件(&F)",
            role: "fileMenu",
            submenu: [
                {
                    label: "新建(&N)"
                },
                {
                    label: "打开(&O)"
                },
                { type: "separator" },
                { label: "保存(&S)" },
                {
                    label: "另存为..."
                },
                { type: "separator" },
                {
                    label: "关闭(&C)",
                    role: "close"
                }
            ]
        },
        {
            label: "编辑(&E)",
            role: "editMenu",
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
        },
        {
            label: "查看(&V)",
            role: "viewMenu",
            submenu: [
                { label: "暗黑模式(&D)", type: "checkbox", checked: systemPreferences.isDarkMode() },
                { type: "separator" },
                { label: "阅读模式(&R)", type: "radio" },
                { label: "编辑模式(&E)", type: "radio" },
                { label: "编辑预览模式(&B)", type: "radio" },
                { type: "separator" },
                { label: "显示状态栏(&S)", type: "checkbox", checked: true }
            ]
        },
        {
            label: "帮助(&H)",
            role: "help",
            submenu: [
                {
                    label: "关于(&A)",
                    role: "about",
                    click: (menuItem, win, ev) => {
                        About.show(win)
                    }
                },
                { label: "文档(&D)" }
            ]
        }
    ])
}
