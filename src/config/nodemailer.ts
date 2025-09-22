import nodemailer from 'nodemailer'
import { envs } from './envs'

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: envs.user,
    pass: envs.pass
  }
});