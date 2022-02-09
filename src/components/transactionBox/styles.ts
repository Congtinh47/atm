import styled from "styled-components";
export const TransactionBoxStyle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(255, 255, 255, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	h5 {
		font-size: 25px;
	}
	.transaction-box {
		max-width: 500px;
		background: white;
		width: 400px;
		text-align: center;
		padding: 20px;
		boxsizing: border-box;
	}
	.image-container {
		width: 100%;
		margin-bottom: 30px;
	}
	.image-container > img {
		width: 80%;
	}
	.group-bottom {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}
	.btn-primitive {
		padding: 15px 50px;
		background: green;
		font-weight: bold;
		color: white;
		border: none;
		border-radius: 20px;
		cursor: pointer;
	}
	.btn-danger {
		padding: 15px 50px;
		background: red;
		font-weight: bold;
		color: white;
		border: none;
		border-radius: 20px;
		cursor: pointer;
	}
`;
