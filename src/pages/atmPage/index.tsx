import React from "react";
import CardCustom from "../../components/CardCustom";
import { Atm, UserQueue } from "../../types/typedata";
import Navbar from "../Navbar";
import { useHandlerTransactionsBox } from "../../hooks/useHandlerTransactionsBox";
import TransactionBox from "../../components/TransactionBox";
import "react-toastify/dist/ReactToastify.css";
import useGetData from "./useGetData";
import { AtmShowPage } from "./styled";
import Loading from "../../components/Loadding/Loadding";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/root.reducer";
import UserInfor from "../../components/UserInfor";
import { lastHusmanTransaction } from "../../ultils/format";

const AtmPage = () => {
	const loading = useSelector((state: RootState) => state.loading.isLoading);
	const { atmData, processedClient, queue } = useGetData();
	const { isdataBox } = useHandlerTransactionsBox();

	return (
		<>
			<Navbar />
			<AtmShowPage>
				<div className="atm-group">
					<div className="card-group">
						{atmData.map((atm: Atm) => (
							<div className="atm-card" key={atm.id}>
								<CardCustom
									id={atm.id}
									atmName={atm.name}
									userName={atm.client}
									transactionStatus={atm.status}
									transaction={atm.transaction}
								/>
							</div>
						))}
					</div>
					<div className="processed-client">
						<h2>Processed client</h2>
						<p>
							<b>Transaction done:</b>{" "}
							<span>{lastHusmanTransaction(processedClient)}</span>
						</p>
					</div>
				</div>

				<div className="user-queue">
					<h4>Queue:</h4>
					<div className="group-queue">
						{queue.map((que: UserQueue, index: number) => {
							return (
								<UserInfor
									name={que.name}
									transaction={que.transaction}
									index={index}
								/>
							);
						})}
					</div>
				</div>
				{isdataBox && <TransactionBox />}
			</AtmShowPage>
			{loading && <Loading />}
		</>
	);
};

export default AtmPage;
