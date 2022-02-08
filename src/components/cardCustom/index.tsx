import React from "react";
import atm from "./../../assets/image/atm.png";
import { CardCustomStyles } from "./styles";
function CardCustom() {
	const username = "test1";
	const atmName = "Busy";
	return (
		<CardCustomStyles>
			<div className="image-card">
				<img src={atm} alt="atm" />
			</div>
			<div>
				<img src={atm} alt="atm" />
			</div>
			<div>{atmName}</div>
			<div>{username}</div>
		</CardCustomStyles>
	);
}

export default CardCustom;
