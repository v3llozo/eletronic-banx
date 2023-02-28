import express from 'express';
import * as dotenv from 'dotenv';
import { AppRouter } from './routes';
dotenv.config({ path: './config/.env' });

const app = express();
const port = process.env.PORT || 3000;
const router = new AppRouter(app);

app.use(express.json());
start();

function start() {
	app.listen(port, () => {
		console.log(`[server]: Server is running at http://localhost:${port}`);
	});
}
