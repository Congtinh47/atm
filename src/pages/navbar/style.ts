import styled from "styled-components";

export const NavbarStyles = styled.div`
	background: white;
	max-width: 1400px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	.addData {
		display: flex;
	}
	.btn {
		margin: 0 4px;
		background-color: blue;
		color: white;
		border: 0px; // an element labeled ".something" inside <Thing>
		display: block;
		padding: 5px 10px;
		cursor: pointer;
	}
	.userStatus {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		cursor: pointer;
	}
	.avatar {
		padding: 5px;
		background: white;
		margin: 0 5px;
		border: 1px solid;
		border-radius: 50%;
	}
	.button-login {
		position: absolute;
		bottom: -100%;
		padding: 2px 20px;
		width: 80px;
		background: yellow;
		border: 1px solid black;
	}
	.button-login:hover {
		background: green;
		color: white;
	}
	.
`;
