import { Connection, connect, connection } from 'mongoose';
import { config } from '../helpers/config';
import { LoggerFactory } from '../services/factories';

const logger = LoggerFactory().logger;

//create connection and export as a singleton
connect(config.DATABASE_URL, {})
	.then(() => {
		logger.info('Connected to MongoDB');
	})
	.catch((err) => {
		logger.error('Error connecting to MongoDB', err);
	});

const conn: Connection = connection;

export default conn;
