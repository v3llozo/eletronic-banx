import { Router } from 'express';
import { container } from 'tsyringe';
import { EventController } from '../controllers/event.controller';
import { EventValidation } from '../middlewares/event.validation';

export class EventRoute {
	public route: Router;
	constructor() {
		const event = container.resolve(EventController);
		const eventValidation = container.resolve(EventValidation);
		this.route = Router().post(
			'/event',
			(req, res, next) => eventValidation.valid(req, res, next),
			(req, res, next) => event.post(req, res, next)
		);
	}
}
