import express from 'express';
import * as dotenv from 'dotenv';
import { AppRouter } from './routes';
import 'reflect-metadata';
dotenv.config({ path: './config/.env' });

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const router = new AppRouter(app);
start();

function start() {
	app.listen(port, () => {
		console.log(`[server]: Server is running at http://localhost:${port}`);
	});
}
