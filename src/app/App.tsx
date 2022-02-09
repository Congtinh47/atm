import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import AtmPage from "../pages/atmPage/inđex";
function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={AtmPage} />
				<Route path="/login" component={LoginPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
