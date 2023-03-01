import { NextFunction, Request, Response } from 'express';
import { injectable } from 'tsyringe';
import { AccountService } from '../services/account.service';

@injectable()
export class ResetController {
	constructor(private service: AccountService) {}
	post(req: Request, res: Response, next: NextFunction) {
		return res.send(this.service.reset()).status(200);
	}
}
