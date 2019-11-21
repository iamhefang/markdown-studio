"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
document.title = "";
class MarkdownStudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(React.Fragment, null));
    }
}
const root = document.createElement("div");
root.id = "root";
react_dom_1.render(React.createElement(MarkdownStudio, null), root);
