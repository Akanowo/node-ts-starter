import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRouter from './routes';
import { ResultFunction } from './helpers/utils';
import { ReturnStatus } from './types/generic';
import conn from './models/conn';
import errorHandler from './middlewares/errorHandler';
import logRequest from './middlewares/logRequest';
import { LoggerFactory } from './services/factories';

const app = express();
const PORT = process.env.PORT || 8080;

const logger = LoggerFactory().logger;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', logRequest, apiRouter);

app.use('**', (req: Request, res: Response) => {
	const data = ResultFunction(
		false,
		'NOT FOUND',
		404,
		ReturnStatus.NOT_FOUND,
		null
	);
	return res.status(data.code).json(data);
});

app.use(errorHandler);

app.listen(PORT, async () => {
	await conn;
	logger.info(`Listening on ${PORT}`);
});
