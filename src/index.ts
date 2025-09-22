import express from 'express';
import { connectMongoDB } from './config/database'
import { envs } from './config/envs';
import contactEmailRoute from './routes/email'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

connectMongoDB();

app.use('/api', contactEmailRoute);

app.listen(envs.port as string, () => {
    console.log(`Server is Listening on port: ${envs.port}`)
});