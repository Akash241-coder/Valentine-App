import { Resend } from 'resend';

export const sendValentineMail = async (to: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const link = process.env.FRONTEND_URL;

  await resend.emails.send({
    from: 'Valentine 💌 <onboarding@resend.dev>',
    to,
    subject: 'Someone has a special question for you 💖',
    html: `
      <h2>Hey 💌</h2>
      <p>Someone made something special for you...</p>
      <a href="${link}" style="font-size:22px;">Click here ❤️</a>
    `,
  });
};
