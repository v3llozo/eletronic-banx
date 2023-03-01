import { injectable } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';
import { AccountService } from '../services/account.service';

@injectable()
export class BalanceController {
	constructor(private service: AccountService) {}
	get(req: Request, res: Response, next: NextFunction) {
		let id = req.query.account_id!.toString();
		let account = this.service.read(id);
		if (account) {
			return res.status(200).send(account.balance.toString());
		}
		return res.status(404).send('0');
	}
}
