import styled from "styled-components";
export const CardCustomStyles = styled.div`
	width: 100%;
	margin-bottom: 30px;
	position: relative;
	.image-card {
		width: 100%;
	}
	.image-card img {
		width: 70%;
	}
	.delete-button {
		position: absolute;
		width: 30px;
		top: 0;
		right: 30px;
		cursor: pointer;
	}
	.delete-button > img {
		width: 100%;
	}
	.transaction-status {
		color: Orange;
		font-size: 30px;
		font-weight: bold;
		padding: 0px;
	}
	.atm-name {
		padding: 5px;
		font-size: 22px;
	}
`;
