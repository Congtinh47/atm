import { AxiosResponse } from "axios";
import React from "react";
import usehandleAtm from "../../hooks/usehandleAtm";
import atm from "./../../assets/image/atm.png";
import deleteImage from "./../../assets/image/delete.jpg";
import { CardCustomStyles } from "./styles";
import { ICardCustom } from "./type";
function CardCustom({
	id = "",
	atmName = "",
	userName = "",
	transactionStatus = "",
}: ICardCustom) {
	const { deleteATM } = usehandleAtm();

	return (
		<CardCustomStyles>
			<div className="image-card">
				<img src={atm} alt="atm" />
			</div>
			<div
				className="delete-button"
				onClick={() => deleteATM(id, transactionStatus)}
			>
				<img src={deleteImage} alt="delete" />
			</div>

			<div className="transaction-status">{transactionStatus}</div>
			<div className="atm-name">{atmName}</div>
			<div>{userName}</div>
		</CardCustomStyles>
	);
}

export default CardCustom;
