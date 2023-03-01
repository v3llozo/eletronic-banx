import { singleton } from 'tsyringe';
import { Account } from '../models/account';

@singleton()
export class AccountService {
	private accounts: Account[] = [];

	create(id: string): Account {
		let newAccount = {
			id: id,
			balance: 0,
		};
		this.accounts.push(newAccount);
		return newAccount;
	}

	public read(id: string): Account | null {
		let data = this.accounts.find((i) => i.id == id);
		return data || null;
	}

	update(account: Account, balance: number): Account {
		return (this.accounts[this.accounts.indexOf(account)] = {
			...account,
			balance,
		});
	}

	public reset() {
		this.accounts = [];
		return 'OK';
	}

	public deposit(id: string, value: number): Account {
		let account = this.read(id);
		if (!account) {
			let newAccount = this.create(id);
			account = newAccount;
		}
		return this.update(account, account.balance + value);
	}

	public withdraw(id: string, value: number): Account | false {
		let account = this.read(id);
		if (!account) {
			return false;
		}
		return this.update(account, account.balance + value);
	}

	public transfer(originId: string, destinationId: string, amount: number) {
		let origin = this.read(originId);
		let destination = this.read(destinationId);
		if (!origin || !destination) {
			return 0;
		}

		this.withdraw(origin.id, amount);
	}
}
