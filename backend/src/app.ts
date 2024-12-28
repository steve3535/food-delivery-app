import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from 'dotenv';
import routes from './routes';

config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', routes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
