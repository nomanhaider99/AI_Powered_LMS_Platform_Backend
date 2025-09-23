"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactEmail = void 0;
const response_1 = require("../utils/response");
const codes_1 = require("../utils/codes");
const email_1 = require("../utils/email");
const contactEmail = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!request.body) {
            (0, response_1.ErrorResponse)(codes_1.StatusCode.BAD_REQUEST, 'invalid request body!', next);
            return;
        }
        else {
            const { from, name, html } = request.body;
            if (!name || !from || !html) {
                (0, response_1.ErrorResponse)(codes_1.StatusCode.BAD_REQUEST, 'invalid body!', next);
                return;
            }
            else {
                const info = yield (0, email_1.sendEmail)(from, `Message from ${name}`, html);
                if (info.accepted.length > 0) {
                    (0, response_1.SuccessResponse)(codes_1.StatusCode.OK, 'message successfully sent!', response, null);
                    return;
                }
                else {
                    (0, response_1.ErrorResponse)(codes_1.StatusCode.SERVICE_UNAVAILABLE, 'failed to send email!', next);
                    return;
                }
            }
        }
    }
    catch (error) {
        (0, response_1.ErrorResponse)(codes_1.StatusCode.INTERNAL_SERVER_ERROR, error.message, next);
        return;
    }
});
exports.contactEmail = contactEmail;
