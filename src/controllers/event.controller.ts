import { NextFunction, Request, Response } from 'express';

export class EventController {
	get(req: Request, res: Response, next: NextFunction) {
		return res.send({ status: 'ok' }).status(201);
	}
	post(req: Request, res: Response, next: NextFunction) {
		return res.send({ status: 'ok' }).status(201);
	}
}
