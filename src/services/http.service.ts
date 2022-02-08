import axios, { AxiosRequestConfig } from "axios";
const BASE_URL =
	(process.env.REACT_APP_BASE_URL as string) || "http://localhost:4000";
// const BASE_URL = "http://localhost:5000";

export const http = axios.create({
	baseURL: BASE_URL,
});

http.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// loaddingOn
		return config;
	},
	(error) => {}
);

http.interceptors.response.use(
	(response) => {
		//hide loadding
		const { data } = response;
		//store token
		if (data.user && data.message === "Login successfully !") {
			const { PRIVATE_TOKEN, user } = data;
			window.localStorage.setItem(
				"data_user_login",
				JSON.stringify({ PARIVATE_TOKEN: PRIVATE_TOKEN, user: user })
			);
		}
		return response;
	},
	(error) => {
		return error.response;
	}
);
