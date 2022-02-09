import React from "react";
import { useLogoutHandler } from "./useLogoutHandler";
import { useHandlerTransactionsBox } from "../../hooks/useHandlerTransactionsBox";
import { NavbarStyles } from "./style";
const currentUser = "Current User";
const Navbar = () => {
	const { isButtonLogout, showButtonLogout, handleLogout } = useLogoutHandler();
	const { displayTransactionBox, displayAddAtmBox } =
		useHandlerTransactionsBox();

	return (
		<NavbarStyles>
			<div className="addData">
				<button className="btn" onClick={displayAddAtmBox}>
					Add new ATM
				</button>
				<button className="btn" onClick={displayTransactionBox}>
					Add Transaction
				</button>
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
};

export default React.memo(Navbar);
