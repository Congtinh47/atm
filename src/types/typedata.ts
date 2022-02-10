export interface Atm {
	client: string;
	id: string;
	name: string;
	remove: boolean;
	status: string;
	transaction: string;
}
export interface UserQueue {
	name: string;
	transaction: string;
}

export interface TypeAtmData {
	atm: Atm[];
	processedClient: string;
	queue: UserQueue[];
}
export interface IInitialTransaction {
	namePeople: string;
	transaction: string;
}
export interface IInitialATM {
	name: string;
}
export interface TypeResponseAddPeoPle {
	message: string;
	success: string;
}
export interface IActionTransactionReducer {
	type: string;
	payload: boolean;
}
export interface IActionAddAtmReducer {
	type: string;
	payload: boolean;
}
