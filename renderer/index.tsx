import * as React from "react";
import { render } from "react-dom";
import * as pkg from "../package.json";
import { setTitle } from "./utils/utils";

setTitle(pkg.displayName);
interface MarkdownStudioProps {

}
interface MarkdownStudioState {

}
class MarkdownStudio extends React.Component<MarkdownStudioProps, MarkdownStudioState> {
	constructor(props: MarkdownStudioProps) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<></>
		);
	}
}

const root = document.createElement("div") as HTMLDivElement;
root.id = "root";
render(<MarkdownStudio />, root);
