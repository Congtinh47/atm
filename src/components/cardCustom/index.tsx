import React, { FC } from "react";
import usehandleAtm from "../../hooks/usehandleAtm";
import atm from "./../../assets/image/atm.png";
import deleteImage from "./../../assets/image/delete.jpg";
import { CardCustomStyles } from "./styled";
interface ICardCustom {
	id: string;
	atmName: string;
	userName: string;
	transactionStatus: string;
}

const CardCustom: FC<ICardCustom> = ({
	id = "",
	atmName = "",
	userName = "",
	transactionStatus = "",
}) => {
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
};

export default React.memo(CardCustom);
