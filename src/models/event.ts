export interface Event {
	type: EventType;
	origin: {
		id: string;
		balance: number;
	};
	destination: {
		id: string;
		balance: number;
	};
}

export enum EventType {
	DEPOSIT = 'deposit',
	TRANSFER = 'transfer',
	WITHDRAW = 'withdraw',
}
