import { all } from "redux-saga/effects";
import watchGetAtmData from "./atm.saga";

export default function* rootSaga() {
	yield all([watchGetAtmData()]);
}
