import { AxiosRequestConfig } from "axios";
import { TypeAtmData } from "../types/typedata";
import { httpToken } from "./http.service";

export const atmService = {
	getAtm: async (config?: AxiosRequestConfig) => {
		return httpToken.get<TypeAtmData[]>(`/api/v1/atms/`, {
			...config,
		});
	},
};
