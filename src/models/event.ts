export interface Event {
	type: 'deposit' | 'transfer' | 'withdraw';
	origin: {
		id: string;
		balance: number;
	};
	destination: {
		id: string;
		balance: number;
	};
}
