import { Router } from 'express';
import { container } from 'tsyringe';
import { ResetController } from '../controllers/reset.controller';

export class ResetRoute {
	public route: Router;
	constructor() {
		const reset = container.resolve(ResetController);
		this.route = Router().post('/reset', (req, res, next) =>
			reset.post(req, res, next)
		);
	}
}
