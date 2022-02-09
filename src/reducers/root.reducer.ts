import { combineReducers } from "redux";
import atmReducer from "./atmReducer.reducer";
import popupBoxReducer from "./popupBoxReducer.reducers";

const rootReducer = combineReducers({
	atm: atmReducer,
	popupBox: popupBoxReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
