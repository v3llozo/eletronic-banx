import { NextFunction, Request, Response, Router } from 'express';
import { EventController } from '../controllers/event.controller';

export class EventRoute {
	private event = new EventController();
	route: Router = Router()
		.post('/event', this.event.post)
		.get('/event', this.event.get);
}
