"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = exports.ErrorResponse = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const ErrorResponse = (statusCode, message, next) => {
    return next((0, http_errors_1.default)(statusCode, message));
};
exports.ErrorResponse = ErrorResponse;
const SuccessResponse = (statusCode, message, response, data) => {
    return response.setHeader('Access-Control-Allow-Origin', ['http://localhost:3000']).json({
        statusCode,
        message,
        data
    });
};
exports.SuccessResponse = SuccessResponse;
