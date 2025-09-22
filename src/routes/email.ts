import { Router } from "express";
import { contactEmail } from "../controllers/contact-email";

const router = Router();

router.post('/send-email-message', contactEmail);

export default router;