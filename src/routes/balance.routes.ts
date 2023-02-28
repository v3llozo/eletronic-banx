import { NextFunction, Request, Response, Router } from 'express';
import { BalanceController } from '../controllers/balance.controller';

export class BalanceRoute {
	private balance = new BalanceController();
	route: Router = Router()
		.get('/balance', this.balance.get);
}
