import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { apiGetAllAtm } from "../../action/actionCreator";
import { RootState } from "../../reducers/root.reducer";
import { TypeAtmData } from "../../types/typedata";

export default function useGetData() {
	const dispatch = useDispatch();
	const history = useHistory();
	const {
		atm: atmData,
		processedClient,
		queue,
	}: TypeAtmData = useSelector((state: RootState) => state.atm) || [];
	// check token
	useEffect(() => {
		const dataUserLogin = window.localStorage.getItem("data_user_login") || "";
		////////////////////////////////
		if (dataUserLogin) {
			const tGetAtm = setInterval(() => {
				dispatch(apiGetAllAtm());
			}, 2000);
			//clear timer when mounted
			return () => clearInterval(tGetAtm);
		} else {
			history.push("/login");
		}
	}, []);
	//////////////////////
	return { atmData, processedClient, queue };
}
