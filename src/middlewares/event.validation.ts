import { NextFunction, Request, Response } from 'express';
import { injectable } from 'tsyringe';
import { EventType } from '../models/event';
import { AccountService } from '../services/account.service';

@injectable()
export class EventValidation {
	constructor(private service: AccountService) {}
	public valid(req: Request, res: Response, next: NextFunction) {
		const event = req.body;

		if (
			!event ||
			!event.type ||
			!event.amount ||
			(!event.destination && !event.origin)
		) {
			return res.status(404).send('0');
		}

		if (
			event.type != EventType.DEPOSIT &&
			event.type != EventType.TRANSFER &&
			event.type != EventType.WITHDRAW
		) {
			return res.status(400).send();
		}

		if (event.amount < 0) {
			return res.status(400).send();
		}

		if (event.type == EventType.WITHDRAW || event.type == EventType.TRANSFER) {
			let origin = this.service.read(event.origin);
			if (!origin) {
				return res.status(404).send('0');
			} else {
				if (origin.balance < event.amount) {
					return res.status(404).send('0');
				}
			}
		}

		next();
	}
}
