import { NextFunction, Request, Response } from 'express';

export class BalanceController {
	get(req: Request, res: Response, next: NextFunction) {
		return res.send({ status: 'ok' }).status(201);
	}
}
