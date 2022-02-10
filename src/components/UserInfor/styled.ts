import styled from "styled-components";
export const UserInforStyled = styled.div`
	width: 100%;
	box-sizing: border-box;
	height: 80px;
	background: white;
	padding: 5px;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
	border-radius: 15px;
	border: 1px solid rgba(0, 0, 0, 0.4);

	.image-queue {
		/* height: 100%; */
		display: flex;
		width: 30%;
		justify-content: center;
		align-items: center;
	}
	.image-queue > img {
		width: 60%;
	}
	.user-info {
		width: 70%;
	}
	.user-name {
		font-size: 22px;
		margin-bottom: 10px;
		color: blue;
		font-weight: bold;
	}
	.transaction-index {
		font-size: 22px;
	}
`;
