import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function useLogoutHandler() {
	const history = useHistory();
	const [isButtonLogout, setIsButtonLogout] = useState(false);
	function showButtonLogout() {
		setIsButtonLogout(!isButtonLogout);
	}
	function handleLogout() {
		history.push("/login");
	}
	return { isButtonLogout, showButtonLogout, handleLogout };
}

export default useLogoutHandler;
