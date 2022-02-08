import styled from "styled-components";
export const LoginStyles = styled.div`
	background: linear-gradient(
		90deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(2, 0, 36, 1) 0%,
		rgba(9, 9, 121, 1) 6%,
		rgba(0, 212, 255, 1) 60%
	);
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		margin-top: 0;
	}
	.sign-form {
		max-width: 300px;
		width: 400px;
		padding: 50px 30px;
		background-color: white;
		justify-content: center;
		align-items: center;
		border: none;
		border-radius: 20px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	.form-header {
		width: 100%;
		text-align: center;
		font-size: 32px;
		font-weight: bold;
		color: #4b2354;
		margin-bottom: 50px;
	}
	.input-form {
		box-sizing: border-box;
		width: 100%;
		padding: 15px;
		border: none;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		color: #4b2354;
		font-weight: bold;
		font-size: 18px;
	}
	.group-bottom {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 15px;
	}
	.btn-pink {
		padding: 15px 50px;
		background: #bd59d4;
		color: white;
		border: none;
		border-radius: 20px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		text-transform: uppercase;
		font-weight: bold;
		cursor: pointer;
	}
	.btn-white {
		padding: 15px 50px;
		background: white;
		color: black;
		border: none;
		border-radius: 20px;
		cursor: pointer;
	}
`;
