import express from 'express';
import { connectMongoDB } from './config/database'
import { envs } from './config/envs';

const app = express();

connectMongoDB();

app.listen(envs.port, () => {
    console.log(`Server is Listening on port: ${envs.port}`)
});