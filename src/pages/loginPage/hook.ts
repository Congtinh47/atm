import { AxiosResponse } from "axios";
import { FormikHelpers } from "formik";
import { useHistory } from "react-router-dom";
import { loginServices } from "../../services/login.service";
import { FormValues } from "./type";

export default function useSignInForm() {
	const history = useHistory();
	async function handleLogin(
		values: FormValues,
		formikHelpers: FormikHelpers<FormValues>
	) {
		try {
			const { email, password } = values;
			const resp: AxiosResponse = await loginServices.login({ email, password });
			// console.log(resp);
			const { data } = resp;
			if (resp && resp.status === 200) {
				// check user or password is exit or not
				if (data && !data.sign && data.message === "wrong password !") {
					//not
					formikHelpers.setErrors({ email: "email or password is wrong" });
				} else if (data && data.user && data.message === "Login successfully !") {
					//redirect to atm page
					history.push("/");
				}
			}
		} catch (err) {
			console.log(err);
		}
	}

	return { handleLogin };
}
