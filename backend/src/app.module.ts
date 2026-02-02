import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { ValentineController } from './valentine/valentine.controller';
import { ValentineService } from './valentine/valentine.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'frontend'),
    }),
  ],
  controllers: [ValentineController],
  providers: [ValentineService],
})
export class AppModule {}
