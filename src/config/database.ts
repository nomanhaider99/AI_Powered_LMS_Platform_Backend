import mongoose from "mongoose";
import { envs } from "./envs";

export const connectMongoDB = () => {
    try {
        mongoose.connect(
            envs.mongodb_uri as string,
        )
        console.log(`MongoDB Connected!`)
    } catch (error: any) {
        throw new Error(error);
    }
}