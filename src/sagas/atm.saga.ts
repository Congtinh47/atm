import * as types from "./../action/actionTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { atmService } from "./../services/atm.service";
import { AxiosResponse } from "axios";
import { TypeAtmData } from "../types/typedata";
//watcher
export default function* watchGetAtmData() {
	yield takeLatest(types.GET_ATM_DATA, workerGetAtmData);
}
//worker
export function* workerGetAtmData() {
	try {
		const res: AxiosResponse<TypeAtmData> = yield call(atmService.getAtm);
		console.log(res);
	} catch (error: any) {
		// yield put(actions.getAllProductsFailure(error.message));
	}
}
