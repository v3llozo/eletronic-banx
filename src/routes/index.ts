import 'reflect-metadata';
import { Application } from 'express';
import { BalanceRoute } from './balance.routes';
import { EventRoute } from './event.routes';
import { ResetRoute } from './reset.routes';
export class AppRouter {
	constructor(app: Application) {
		const balance: BalanceRoute = new BalanceRoute();
		const events: EventRoute = new EventRoute();
		const reset: ResetRoute = new ResetRoute();

		app.use(balance.route);
		app.use(events.route);
		app.use(reset.route);
	}
}
