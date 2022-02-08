import * as Yup from "yup";
import { FormValues } from "./type";

export const initialValue: FormValues = { email: "", password: "" };
export const SignInSchema = Yup.object().shape({
	email: Yup.string().required("email is required"),
	password: Yup.string().required("password is required"),
});
