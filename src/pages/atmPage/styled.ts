import styled from "styled-components";
import { devices } from "../../ultils/device";
export const AtmShowPage = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
	max-width: 1400px;
	margin: 0 auto;
	padding: 10px;
	display: flex;
	flex-grow: 0;
	flex-shrink: 0;
	.atm-group {
		flex-basis: 70%;
		background: white;
	}
	.card-group {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		height: 820px;
		flex-wrap: wrap;
		text-align: center;
		justify-content: start;
		overflow: auto;
	}
	.atm-card {
		box-sizing: border-box;
		flex-basis: 33%;
		background: white;
		margin-bottom: 20px;
		padding: 0px 5px;
	}
	.processed-client {
		text-align: left;

		overflow: auto;
		box-sizing: border-box;
		padding: 10px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	.processed-client h2 {
		margin-top: 0;
	}
	.processed-client p {
		font-size: 26px;
		height: 150px;
		width: 100%;
		box-sizing: border-box;
	}
	.processed-client p span {
		font-family: "Dancing Script", cursive;
		font-size: 22px;
	}
	.user-queue {
		box-sizing: border-box;
		flex-basis: 30%;
		background: white;
		padding: 10px;
		font-size: 22px;
		background: rgba(255, 255, 999, 0.8);
	}
	.group-queue {
		height: calc(100vh - 220px);
		overflow: scroll;
		box-sizing: border-box;
	}

	@media ${devices.tablet} {
		flex-direction: column;
		.atm-group {
			flex-direction: column;
		}
		.atm-card {
			flex-basis: 100%;
		}
	}
`;
