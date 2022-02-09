import * as types from "../action/actionTypes";
import { TypeAtmData } from "../types/typedata";

interface IActionAtmReducer {
	type: string;
	payload: any;
}

const initState: TypeAtmData = {
	atm: [],
	processedClient: "",
	queue: [],
};

const atmReducer = (state = initState, action: IActionAtmReducer) => {
	switch (action.type) {
		case types.GOT_ATM_SUCCESS:
			if (action.payload) {
				const { atm, processedClient, queue } = action.payload;
				return { atm: atm, processedClient: processedClient, queue: queue };
			}
			return { ...state };
		default:
			return { ...state };
	}
};
export default atmReducer;
