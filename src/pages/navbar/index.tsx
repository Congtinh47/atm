import React, { useState } from "react";

import { NavbarStyles } from "./style";
const currentUser = "Current User";
function Navbar() {
	const [isButtonLogout, setIsButtonLogout] = useState(true);

	return (
		<NavbarStyles>
			<div className="addData">
				<button className="btn">Add new ATM</button>
				<button className="btn">Add Transition</button>
			</div>
			<div className="userStatus" onClick={showButtonLogin}>
				<div className="user-name">{currentUser}</div>
				<div className="avatar">
					<i className="fas fa-user"></i>
				</div>
				{isButtonLogout && <div className="button-login">Logout</div>}
			</div>
		</NavbarStyles>
	);
}

export default Navbar;
