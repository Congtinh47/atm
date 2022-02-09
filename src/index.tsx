import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { Provider } from "react-redux";
import stores from "./store/store";
import "./index.css";

ReactDOM.render(
	<Provider store={stores}>
		<React.StrictMode>
			<Root />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
