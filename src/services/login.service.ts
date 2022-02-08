import { AxiosRequestConfig } from "axios";
import { http } from "./http.service";

type TypeLoginRequestBody = {
	email: string;
	password: string;
};

export const loginServices = {
	login: async (data: TypeLoginRequestBody, config?: AxiosRequestConfig) => {
		return http.post("/api/v1/auth/login", data, {
			...config,
		});
	},
};
