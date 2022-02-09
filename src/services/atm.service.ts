import { AxiosRequestConfig } from "axios";
import {
	IInitialATM,
	IInitialTransaction,
	TypeAtmData,
	TypeResponseAddPeoPle,
} from "../types/typedata";
import { httpToken } from "./http.service";

export const atmService = {
	getAtm: async (config?: AxiosRequestConfig) => {
		return httpToken.get<TypeAtmData[]>(`/api/v1/atms/`, {
			...config,
		});
	},
	addTransaction: async (
		data: IInitialTransaction,
		config?: AxiosRequestConfig
	) => {
		return httpToken.post<TypeResponseAddPeoPle>(`/api/v1/atms/people`, data, {
			...config,
		});
	},
	addATM: async (data: IInitialATM, config?: AxiosRequestConfig) => {
		return httpToken.post<TypeResponseAddPeoPle>(`/api/v1/atms/`, data, {
			...config,
		});
	},
	deleteATM: async (id: string, config?: AxiosRequestConfig) => {
		return httpToken.delete(`/api/v1/atms/${id}`, {
			...config,
		});
	},
};
