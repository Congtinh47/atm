import styled from "styled-components";
import { devices } from "../../ultils/device";
export const AtmShowPage = styled.div`
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
	.card-group{		
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		padding: 20px;
		text-align: center;
		justify-content: start;
	}
	.atm-card {
		flex-basis: 33%;
		background: white;
		margin-bottom: 20px;
	}
	.processed-client {
		text-align: left;
		overflow: scroll;
		box-sizing: border-box;
		padding: 10px;
	}
	.processed-client h2{
		margin-top:0;
	}
	.processed-client p {
		height: 150px;
		width: 100%:
		box-sizing: border-box;
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
	.queue-item {
		box-sizing: border-box;
		height: 100px;
		background: white;
		padding: 5px;
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
		border-radius: 15px;
		border:	1px solid rgba(0, 0, 0, 0.4)
	}
	.image-queue {
		/* height: 100%; */
		display: flex;
		width: 30%;
	}
	.image-queue > img {
		width: 50%;
		/* height: 100%; */
	}
	.user-info {
		width: 70%;
	}
	.user-name {
		font-size: 22px;
		margin-bottom: 10px;
	}
	.transaction-index {
		font-size: 22px;
	}
	@media ${devices.mobileL} {
		flex-direction: column;
		.atm-group {
		}
	}
`;
