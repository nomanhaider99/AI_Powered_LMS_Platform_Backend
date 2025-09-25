import express from 'express';
import { connectMongoDB } from './config/database';
import { envs } from './config/envs';
import contactEmailRoute from './routes/email';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

connectMongoDB();

app.use('/api', contactEmailRoute);

export default app;