import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Provider } from "react-redux";
import stores from "./store/store";
import "./index.css";

ReactDOM.render(
	<Provider store={stores}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
