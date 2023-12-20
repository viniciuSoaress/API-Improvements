
import { Resend } from 'resend';

const key = process.env.KEY_API_EMAIL

const resend = new Resend(key);

export async function sendEmail (email: string, message: string) {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['vinifuscao5@gmail.com', email],
      subject: 'Hello World',
      html: `<strong>${message}</strong>`,
    });
  } catch (error) {
    console.error(error);
  }
};
