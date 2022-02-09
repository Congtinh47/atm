import {
	apiGetAllAtm,
	display_add_atm_box,
	display_transaction_box,
} from "../action/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/root.reducer";
import { IInitialATM, IInitialTransaction } from "../types/typedata";
import { FormikHelpers } from "formik";
import { atmService } from "../services/atm.service";

export function useHandlerTransactionsBox() {
	const dispatch = useDispatch();
	const { transaction: isTransactionBox, atm: isatmbox } = useSelector(
		(state: RootState) => state.popupBox
	);
	const displayTransactionBox = () => {
		dispatch(display_transaction_box(true));
	};
	const hiddenTransactionBox = () => {
		dispatch(display_transaction_box(false));
	};
	const displayAddAtmBox = () => {
		dispatch(display_add_atm_box(true));
	};
	const hiddenAddAtmBox = () => {
		dispatch(display_add_atm_box(false));
	};
	////////////////////////////////////////////
	const addTransaction = async (
		values: IInitialTransaction,
		formikHelpers: FormikHelpers<IInitialTransaction>
	) => {
		const { namePeople, transaction } = values;
		const resp = await atmService.addTransaction({
			namePeople: namePeople,
			transaction: transaction,
		});
		if (resp.status !== 200) {
			formikHelpers.setErrors({ namePeople: "has wrong here" });
		} else {
			dispatch(display_transaction_box(false));
			dispatch(apiGetAllAtm());
		}
	};
	////////////////////////////////////////////
	const addNewAtm = async (
		values: IInitialATM,
		formikHelpers: FormikHelpers<IInitialATM>
	) => {
		const resp = await atmService.addATM({
			name: values.name,
		});
		if (resp.status !== 200) {
			formikHelpers.setErrors({ name: "has wrong here" });
		} else {
			dispatch(display_add_atm_box(false));
		}
	};

	////////////////////////////////////////////
	const addNew: any = isTransactionBox
		? addTransaction
		: isatmbox
		? addNewAtm
		: () => {};

	const hiddenBox = isTransactionBox
		? hiddenTransactionBox
		: isatmbox
		? hiddenAddAtmBox
		: () => {};

	const isdataBox = isTransactionBox ? "transition" : isatmbox ? "atm" : "";
	return {
		isdataBox,
		displayTransactionBox,
		displayAddAtmBox,
		hiddenAddAtmBox,
		hiddenTransactionBox,
		addTransaction,
		addNew,
		hiddenBox,
	};
}
