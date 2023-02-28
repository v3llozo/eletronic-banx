export interface Event {
	type: 'deposit' | 'transfer' | 'withdraw';
	origin: {
		id: number;
		balance: number;
	};
	destination: {
		id: number;
		balance: number;
	};
}
