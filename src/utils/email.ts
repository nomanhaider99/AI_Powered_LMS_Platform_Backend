import { envs } from '../config/envs';
import { transporter } from '../config/nodemailer';

export const sendEmail = async (
    from: string,
    subject: string,
    html: string
) => {
    try {
        const response = await transporter.sendMail(
            {
                from: from,
                to: envs.user,
                subject: subject,
                html: html
            }
        );

        return response;
    } catch (error: any) {
        throw new Error(error);
    }
}