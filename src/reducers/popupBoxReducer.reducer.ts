import * as types from "../action/actionTypes";
import {
	IActionAddAtmReducer,
	IActionTransactionReducer,
} from "../types/typedata";

const popupBoxReducer = (
	state = { transaction: false, atm: false },
	action: IActionTransactionReducer | IActionAddAtmReducer
) => {
	switch (action.type) {
		case types.DISPLAY_TRANSACTION_BOX: {
			const { transaction, atm } = state;
			return { transaction: action.payload, atm };
		}
		case types.DISPLAY_ADD_ATM_BOX: {
			const { transaction, atm } = state;
			return { atm: action.payload, transaction };
		}
		default:
			return { ...state };
	}
};
export default popupBoxReducer;
