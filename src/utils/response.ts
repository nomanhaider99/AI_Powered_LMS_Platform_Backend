import { NextFunction, Response } from "express";
import createHttpError, { CreateHttpError } from "http-errors";

export const ErrorResponse = (
    statusCode: number,
    message: string,
    next: NextFunction
) => {
    return next(createHttpError(statusCode, message));
}

export const SuccessResponse = (
    statusCode: number,
    message: string,
    response: Response,
    data: unknown
) => {
    return response.setHeader('Access-Control-Allow-Origin', ['http://localhost:3000']).json(
        {
            statusCode,
            message,
            data
        }
    )
}