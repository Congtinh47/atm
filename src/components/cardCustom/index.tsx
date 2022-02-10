import React, { FC, useState } from "react";
import usehandleAtm from "../../hooks/usehandleAtm";
import UserInfor from "../UserInfor";
import atm from "./../../assets/image/atm.png";
import deleteImage from "./../../assets/image/delete.jpg";
import { CardCustomStyles } from "./styled";
import AlertDialog from "./../AlertDialogs/index";
import useShowConfirmBox from "./useShowConfirmBox";
interface ICardCustom {
	id: string;
	atmName: string;
	userName: string;
	transactionStatus: string;
	transaction: string;
}

const CardCustom: FC<ICardCustom> = ({
	id = "",
	atmName = "",
	userName = "",
	transactionStatus = "",
	transaction = "",
}) => {
	const { deleteATM } = usehandleAtm();
	const { isOpenBox, handleClickDelete, handleClickClose, handleDisAgree } =
		useShowConfirmBox();
	const handleAgree = () => {
		deleteATM(id, transactionStatus);
	};
	return (
		<CardCustomStyles>
			<div className="image-card">
				<img src={atm} alt="atm" />
			</div>

			<div className="delete-button" onClick={handleClickDelete}>
				<img src={deleteImage} alt="delete" />
			</div>
			<div className="transaction-status">{transactionStatus}</div>
			<div className="atm-name">{atmName}</div>
			<UserInfor name={userName} transaction={transaction} />
			<AlertDialog
				open={isOpenBox}
				handleClickClose={handleClickClose}
				handleAgree={handleAgree}
				handleDisAgree={handleDisAgree}
			/>
		</CardCustomStyles>
	);
};

export default React.memo(CardCustom);
