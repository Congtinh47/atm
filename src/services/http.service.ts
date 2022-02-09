import axios, { AxiosRequestConfig } from "axios";
const BASE_URL =
	(process.env.REACT_APP_BASE_URL as string) || "http://localhost:4000";

export const http = axios.create({
	baseURL: BASE_URL,
});

export const httpToken = axios.create({
	baseURL: BASE_URL,
});

http.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// loaddingOn
		// store.dispatch(turnLoadingOn());
		return config;
	},
	(error) => {
		// store.dispatch(turnLoadingOff());
	}
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

httpToken.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// loaddingOn
		const dataUserLogin = window.localStorage.getItem("data_user_login");
		const { PARIVATE_TOKEN } = JSON.parse(dataUserLogin as string) || "";
		// console.log(PARIVATE_TOKEN);
		if (!PARIVATE_TOKEN) {
			//goto login
		}
		if (config.headers) {
			config.headers.Authorization = `Bearer ${PARIVATE_TOKEN}`;
		}
		return config;
	},
	(error) => {
		if (error && error.status === 401) {
			// store.dispatch(turnLoadingOff());
			//redirect to login page
			// hien pop up
			//refresh token
		}
	}
);

httpToken.interceptors.response.use(
	(response) => {
		//hide loadding
		// store.dispatch(turnLoadingOff());
		return response;
	},
	(error) => {
		// store.dispatch(turnLoadingOff());
		// const status = error.response.status;
		//hide loadding
		//     console.log(error);
		// if (status == 401) {
		// 	//redirect login
		// }
		return error.response;
	}
);
