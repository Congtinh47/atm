import React, { useState } from "react";
import useLogoutHandler from "./hook";

import { NavbarStyles } from "./style";
const currentUser = "Current User";
function Navbar() {
	const { isButtonLogout, showButtonLogout, handleLogout } = useLogoutHandler();
	return (
		<NavbarStyles>
			<div className="addData">
				<button className="btn">Add new ATM</button>
				<button className="btn">Add Transition</button>
			</div>
			<div className="userStatus" onClick={showButtonLogout}>
				<div className="user-name">{currentUser}</div>
				<div className="avatar">
					<i className="fas fa-user"></i>
				</div>
				{isButtonLogout && (
					<div className="button-login" onClick={handleLogout}>
						Logout
					</div>
				)}
			</div>
		</NavbarStyles>
	);
}

export default Navbar;
