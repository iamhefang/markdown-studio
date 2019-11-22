import * as path from "path";
export function makeUrl(file: string) {
    const root = path.resolve(__dirname, "../renderer/") + '/' + file
    return `file://${root.replace('//', '/')}`
}
