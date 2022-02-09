import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AtmPage from "../pages/AtmPage/inđex";
export default function Root() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={AtmPage} />
				<Route path="/login" component={LoginPage} />
			</Switch>
		</BrowserRouter>
	);
}
