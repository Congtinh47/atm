import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export function useLogoutHandler() {
	const history = useHistory();
	const [isButtonLogout, setIsButtonLogout] = useState(false);
	function showButtonLogout() {
		setIsButtonLogout(!isButtonLogout);
	}
	function handleLogout() {
		window.localStorage.removeItem("data_user_login");
		history.push("/login");
	}
	return { isButtonLogout, showButtonLogout, handleLogout };
}
