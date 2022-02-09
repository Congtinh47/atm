import * as Yup from "yup";
import { IInitialTransaction } from "../../types/typedata";
import { IInitialATM } from "../../types/typedata";
export const initialValueTransaction: IInitialTransaction = {
	namePeople: "",
	transaction: "",
};
export const createTransactionSchema = Yup.object().shape({
	namePeople: Yup.string().required("user name is required"),
	transaction: Yup.number().required("transaction is required"),
});
export const initialValueATM: IInitialATM = {
	name: "",
};
export const createATMSchema = Yup.object().shape({
	name: Yup.string().required("ATM name is required"),
});
