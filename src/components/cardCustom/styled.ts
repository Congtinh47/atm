import styled from "styled-components";
export const CardCustomStyles = styled.div`
	width: 100%;
	position: relative;
	.image-card {
		width: 100%;
	}
	.image-card img {
		width: 80%;
	}
	.delete-button {
		position: absolute;
		width: 30px;
		top: 0;
		right: 0;
		cursor: pointer;
	}
	.delete-button > img {
		width: 100%;
	}
	.transaction-status {
		color: Orange;
		font-size: 30px;
		font-weight: bold;
		padding: 10px 0px;
	}
	.atm-name {
		padding: 5px;
		font-size: 22px;
	}
`;
