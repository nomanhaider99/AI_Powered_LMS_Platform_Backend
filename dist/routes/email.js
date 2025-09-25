"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_email_1 = require("../controllers/contact-email");
const router = (0, express_1.Router)();
router.post('/send-email-message', contact_email_1.contactEmail);
exports.default = router;
