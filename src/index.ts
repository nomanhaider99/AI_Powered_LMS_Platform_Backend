import express from 'express';
import { connectMongoDB } from './config/database';
import contactEmailRoute from './routes/email';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

connectMongoDB();

app.get('/', (_req, res) => {
  return res.json({ ok: true, msg: 'Backend is working' });
});


app.use('/api', contactEmailRoute);

export default app;