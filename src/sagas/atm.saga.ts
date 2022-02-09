import * as types from "./../action/actionTypes";
import * as actions from "./../action/actionCreator";
import { call, put, takeLatest } from "redux-saga/effects";
import { atmService } from "../services/atm.service";
export interface ResponseGenerator {
	config?: any;
	data?: any;
	headers?: any;
	request?: any;
	status?: number;
	statusText?: string;
}
//watcher
export default function* watchGetAtmData() {
	yield takeLatest(types.GET_ATM_DATA, workerGetAtmData);
}
//worker
export function* workerGetAtmData() {
	try {
		const res: ResponseGenerator = yield call(atmService.getAtm);
		const data = res.data;
		yield put(actions.gotATMSuccess(data));
	} catch (error: any) {
		yield put(actions.gotATMFail(error.message));
	}
}
