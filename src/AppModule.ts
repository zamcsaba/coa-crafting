import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';

// Main module
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
