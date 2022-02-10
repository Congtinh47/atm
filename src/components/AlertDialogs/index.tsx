import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
interface IAlertDialog {
	open: boolean;
	handleClickClose: () => void;
	handleAgree: () => void;
	handleDisAgree: () => void;
}
export default function AlertDialog({
	open = false,
	handleClickClose,
	handleAgree,
	handleDisAgree,
}: IAlertDialog) {
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClickClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Are you sure to delete this atm"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Be sure to delete this atm because this will make it impossible to recover
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleDisAgree}>Disagree</Button>
					<Button onClick={handleAgree} autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
