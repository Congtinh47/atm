import { combineReducers } from "redux";
import atmReducer from "./atmReducer.reducer";
import { loadingReducer } from "./loaddingReducer.reducer";
import popupBoxReducer from "./popupBoxReducer.reducer";

const rootReducer = combineReducers({
	atm: atmReducer,
	popupBox: popupBoxReducer,
	loading: loadingReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
