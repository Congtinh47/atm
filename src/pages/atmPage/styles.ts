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
		flex-basis: 50%;
		background: white;
		text-align: center;
		justify-content: space-between;
		display: flex;
		flex-wrap: wrap;
		padding: 10px;
	}
	.atm-card {
		flex-basis: 33%;
		background: white;
		margin-bottom: 20px;
	}
	.processed-client {
		text-align: left;
		overflow: scroll;
	}
	.processed-client p {
		height: 300px;
		width: 100%:
	}
	.user-queue {
		box-sizing: border-box;
		flex-basis: 50%;
		background: white;
		padding: 10px;
		font-size: 22px;
		background: rgba(255, 255, 999, 0.8);
	}
	.group-queue {
		height: calc(100vh - 220px);
		overflow: scroll;
	}
	.queue-item {
		height: 100px;
		background: white;
		padding: 5px;
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
