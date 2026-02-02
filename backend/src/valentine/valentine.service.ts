import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ValentineService {
  constructor(private config: ConfigService) {}

  getConfig() {
    return {
      name: this.config.get<string>('VALENTINE_NAME'),
      message: this.config.get<string>('VALENTINE_MESSAGE'),
      gifts: [
        this.config.get<string>('GIFT_LINK_1'),
        this.config.get<string>('GIFT_LINK_2'),
        this.config.get<string>('GIFT_LINK_3'),
      ],
    };
  }
}
