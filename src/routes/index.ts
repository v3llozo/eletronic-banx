import { Application } from 'express';
import { BalanceRoute } from './balance.routes';
import { EventRoute } from './event.routes';
import { ResetRoute } from './reset.routes';

export class AppRouter {
	private balance: BalanceRoute = new BalanceRoute();
	private events: EventRoute = new EventRoute();
	private reset: ResetRoute = new ResetRoute();
	constructor(app: Application) {
		app.use(this.balance.route);
		app.use(this.events.route);
		app.use(this.reset.route);
	}
}
