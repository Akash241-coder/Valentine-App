import * as nodemailer from 'nodemailer';

export const sendValentineMail = async (to: string, link: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject: 'Someone has a special question for you 💖',
    html: `
      <h2>Hey 💌</h2>
      <p>Someone made something special for you...</p>
      <a href="${link}" style="font-size:20px;">Click here ❤️</a>
    `,
  });
};
