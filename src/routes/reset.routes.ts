import { NextFunction, Request, Response, Router } from 'express';

export class ResetRoute {
	route: Router = Router().post('/reset', this.reset);

	private reset(req: Request, res: Response, next: NextFunction) {
		return res.send({ status: 'ok' }).status(201);
	}
}
