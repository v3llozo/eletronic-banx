import { NextFunction, Request, Response } from 'express';
import { injectable } from 'tsyringe';
import { EventType } from '../models/event';
import { AccountService } from '../services/account.service';
@injectable()
export class EventController {
	constructor(private service: AccountService) {}
	async post(req: Request, res: Response, next: NextFunction) {
		let request = req.body;
		let response = { data: {}, status: 201 };
		if (request.type == EventType.DEPOSIT) {
			response.data = {
				destination: this.service.deposit(
					req.body.destination,
					req.body.amount
				),
			};
		} else if (request.type == EventType.DEPOSIT) {
			response.data = {
				origin: this.service.withdraw(req.body.origin, req.body.amount),
			};
		} else {
			response.data = {};
		}

		res.status(response.status).send(response.data);
	}
}
