import * as React from "react";
import { render } from "react-dom";
import * as pkg from "../package.json";
import { setTitle } from "./utils/utils.js";

setTitle(pkg.name);

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
