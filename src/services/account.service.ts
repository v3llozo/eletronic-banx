import { Account } from '../models/account';

export class AccountService {
	private accounts: Account[] = [];
	constructor() {}

	create(id: number): Account {
		let newAccount = {
			id: id,
			balance: 0,
		};
		return this.accounts[this.accounts.push(newAccount)];
	}

	read(id: number): Account | false {
		return this.accounts.find((i) => i.id === id) || false;
	}

	reset() {
		this.accounts = [];
	}

	deposit(id: number, value: number) {
		let account = this.accounts[id];
		if (account) {
			this.accounts[id].balance += value;
			return this.accounts[id];
		} else {
			this.accounts[this.create(id).id].balance += value;
			return this.accounts[id];
		}
	}

	withdraw(id: number, value: number) {
		let account = this.accounts[id];
		if (account) {
			this.accounts[id].balance -= value;
			return this.accounts[id];
		}
	}
}
