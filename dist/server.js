"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const envs_1 = require("./config/envs");
const port = envs_1.envs.port || '8000';
index_1.default.listen(port, () => {
    console.log(`Server is Listening on port: ${port}`);
});
