import { Controller, Post, Body } from '@nestjs/common';
import { sendValentineMail } from './mail.service';

@Controller('api')
export class MailController {
  @Post('send-mail')
  async send(@Body() body: { email: string }) {
    const link = process.env.SITE_URL + '/index.html';

    await sendValentineMail(body.email, link);

    return { message: 'Mail sent 💌' };
  }
}
