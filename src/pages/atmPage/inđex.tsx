import CardCustom from "../../components/CardCustom";
import { Atm, UserQueue } from "../../types/typedata";
import Navbar from "../Navbar";
import user from "./../../assets/image/user.png";
import { useHandlerTransactionsBox } from "../../hooks/useHandlerTransactionsBox";
import TransactionBox from "../../components/TransactionBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useGetData from "./useGetData";
import { AtmShowPage } from "./styles";
import React from "react";

const AtmPage = () => {
	const { atmData, processedClient, queue } = useGetData();
	const { isdataBox } = useHandlerTransactionsBox();
	return (
		<>
			<Navbar />
			<AtmShowPage>
				<div className="atm-group">
					{atmData.map((atm: Atm) => (
						<div className="atm-card" key={atm.id}>
							<CardCustom
								id={atm.id}
								atmName={atm.name}
								userName={atm.client}
								transactionStatus={atm.status}
							/>
						</div>
					))}
					<div className="processed-client">
						<h2>Processed client</h2>
						<p>
							<b>Transaction done:</b> {processedClient}
						</p>
					</div>
				</div>

				<div className="user-queue">
					<h4>Queue:</h4>
					<div className="group-queue">
						{queue.map((que: UserQueue, index: number) => {
							return (
								<div className="queue-item" key={index}>
									<div className="image-queue">
										<img src={user} alt="user" />
									</div>
									<div className="user-info">
										<div className="user-name">{que.name}</div>
										<div className="transaction-index">{que.transaction}</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				{isdataBox && <TransactionBox />}
			</AtmShowPage>

			<ToastContainer />
		</>
	);
};

export default AtmPage;
