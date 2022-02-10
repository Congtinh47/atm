import React, { FC } from "react";

import user from "./../../assets/image/user.png";
import { UserInforStyled } from "./styled";
interface IUserInfor {
	name: string;
	transaction: string;
	index?: number;
}

const UserInfor: FC<IUserInfor> = ({ name, transaction, index }) => {
	return (
		<UserInforStyled key={index}>
			<div className="image-queue">
				<img src={user} alt="user" />
			</div>
			<div className="user-info">
				<div className="user-name">{name}</div>
				<div className="transaction-index">{transaction}</div>
			</div>
		</UserInforStyled>
	);
};

export default UserInfor;
