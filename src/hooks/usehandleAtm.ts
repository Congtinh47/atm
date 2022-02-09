import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { atmService } from "../services/atm.service";

export default function usehandleAtm() {
	async function deleteATM(id: string, transactionStatus: string) {
		if (transactionStatus.toLowerCase() === "bussy") {
			toast("ATM is bussy");
		} else {
			const resp: AxiosResponse = await atmService.deleteATM(id);
			console.log(resp);
			if (resp.status === 200 && resp.data.remove) {
				console.log("delete success");
			}
		}
	}
	return { deleteATM };
}
