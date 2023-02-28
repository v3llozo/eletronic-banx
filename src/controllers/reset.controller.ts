import { NextFunction, Request, Response } from 'express';

export class ResetController {
	post(req: Request, res: Response) {
		return res.send().status(200);
	}
}
