export interface Atm {
	client: string;
	id: string;
	name: string;
	remove: boolean;
	status: string;
	transaction: number;
}
export interface UserQueue {
	name: string;
	transaction: string;
}
export interface UserQueueGroup {
	listUserQueue: UserQueue[];
}
export interface TypeAtmData {
	atm: Atm[];
	processedClients: string;
	queue: UserQueueGroup[];
}
