import { Controller, Post, Body } from '@nestjs/common';
import { sendValentineMail } from './mail.service';

@Controller('api')
export class MailController {
  @Post('send-mail')
  async send(@Body() body: { email: string }) {
    await sendValentineMail(body.email);
    return { message: 'Mail sent 💌' };
  }
}
