import { NextFunction, Request, Response } from "express";
import { ErrorResponse, SuccessResponse } from "../utils/response";
import { StatusCode } from '../utils/codes';
import { sendEmail } from "../utils/email";

export const contactEmail = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        if (!request.body) {
            ErrorResponse(
                StatusCode.BAD_REQUEST,
                'invalid request body!',
                next
            )
            return
        } else {
            const { from, name, html } = request.body;

            if (!name || !from || !html) {
                ErrorResponse(
                    StatusCode.BAD_REQUEST,
                    'invalid body!',
                    next
                )
                return
            } else {
                const info = await sendEmail(from, `Message from ${name}`, html);
                if (info.accepted.length > 0) {
                    SuccessResponse(
                        StatusCode.OK,
                        'message successfully sent!',
                        response,
                        null
                    )
                    return
                } else {
                    ErrorResponse(
                        StatusCode.SERVICE_UNAVAILABLE,
                        'failed to send email!',
                        next
                    )
                    return
                }
            }
        }
    } catch (error: any) {
        ErrorResponse(
            StatusCode.INTERNAL_SERVER_ERROR,
            error.message,
            next
        );
        return
    }
}