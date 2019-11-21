import * as React from "react";
import { render } from "react-dom";
document.title = "";
class MarkdownStudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <></>
        );
    }
}

const root = document.createElement("div") as HTMLDivElement;
root.id = "root";
render(<MarkdownStudio />, root)