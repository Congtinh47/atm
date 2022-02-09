import { TypeAtmData } from "../types/typedata";
import * as types from "./actionTypes";
export const apiGetAllAtm = () => ({
	type: types.GET_ATM_DATA,
});
export const gotATMSuccess = (data: TypeAtmData) => ({
	type: types.GOT_ATM_SUCCESS,
	payload: data,
});
export const gotATMFail = (error: string) => ({
	type: types.GOT_ATM_ERROR,
	payload: error,
});
export const display_transaction_box = (show: boolean) => ({
	type: types.DISPLAY_TRANSACTION_BOX,
	payload: show,
});
export const display_add_atm_box = (show: boolean) => ({
	type: types.DISPLAY_ADD_ATM_BOX,
	payload: show,
});
