import { NextFunction, Request, RequestHandler, Response } from 'express';
import { injectable } from 'tsyringe';
import { AccountService } from '../services/account.service';
@injectable()
export class EventController {
	constructor(private service: AccountService) {}
	async post(req: Request, res: Response, next: NextFunction) {
		let request = req.body;
		let response = { data: {}, status: 201 };
		if (request.type == 'deposit') {
			response.data = {
				destination: this.service.deposit(
					req.body.destination,
					req.body.amount
				),
			};
		} else if (request.type == 'withdraw') {
			response.data = {
				origin: this.service.withdraw(req.body.origin, req.body.amount),
			};
		} else {
		}

		res.status(response.status).send(response.data);
	}
}
