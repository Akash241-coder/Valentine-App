import { Controller, Get } from '@nestjs/common';
import { ValentineService } from './valentine.service';

@Controller('api')
export class ValentineController {
  constructor(private readonly service: ValentineService) {}

  @Get('config')
  getConfig() {
    return this.service.getConfig();
  }
}
