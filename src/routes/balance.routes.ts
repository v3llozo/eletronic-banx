import { Router } from 'express';
import { container } from 'tsyringe';
import { BalanceController } from '../controllers/balance.controller';

export class BalanceRoute {
	public route: Router;
	constructor() {
		const balance = container.resolve(BalanceController);
		this.route = Router().get('/balance', (req, res, next) =>
			balance.get(req, res, next)
		);
	}
}
