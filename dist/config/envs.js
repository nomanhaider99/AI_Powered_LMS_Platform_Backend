"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.envs = {
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URI,
    google_client_id: process.env.GOOGLE_CLIENT_ID,
    google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
    gemini_api_key: process.env.GEMINI_API_KEY,
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
};
