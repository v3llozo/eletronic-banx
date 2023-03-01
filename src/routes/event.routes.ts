import { Router } from 'express';
import { container } from 'tsyringe';
import { EventController } from '../controllers/event.controller';

export class EventRoute {
	public route: Router;
	constructor() {
		const event = container.resolve(EventController);
		this.route = Router().post('/event', (req, res, next) =>
			event.post(req, res, next)
		);
	}
}
