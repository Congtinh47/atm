import React from "react";
import { useLogoutHandler } from "./useLogoutHandler";
import { useHandlerTransactionsBox } from "../../hooks/useHandlerTransactionsBox";
import { NavbarStyles } from "./style";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

const currentUser = "Current User";
const Navbar = () => {
	const { isButtonLogout, showButtonLogout, handleLogout } = useLogoutHandler();
	const { displayTransactionBox, displayAddAtmBox } =
		useHandlerTransactionsBox();

	return (
		<NavbarStyles>
			<div className="addData">
				<Stack spacing={2} direction="row">
					<Button variant="contained" color="primary" onClick={displayAddAtmBox}>
						Add new ATM
					</Button>
					<Button variant="contained" onClick={displayTransactionBox}>
						Add Transaction
					</Button>
				</Stack>
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
