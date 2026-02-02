import * as nodemailer from 'nodemailer';

export const sendValentineMail = async (to: string, link: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // verify connection first (very important for debugging)
    await transporter.verify();

    await transporter.sendMail({
      from: `"Secret Admirer 💌" <${process.env.MAIL_USER}>`,
      to,
      subject: 'Someone has a special question for you 💖',
      html: `
        <h2>Hey 💌</h2>
        <p>Someone made something special for you...</p>
        <a href="${link}" style="font-size:20px;">Click here ❤️</a>
      `,
    });

    console.log('✅ Mail sent successfully');
  } catch (error) {
    console.error('❌ Mail error:', error);
    throw error; // so you can see real error in Render logs
  }
};
