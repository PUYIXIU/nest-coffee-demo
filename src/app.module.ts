import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';
import { CakeController } from './cake/cake.controller';
import { CakeService } from './cake/cake.service';
import { CakeModule } from './cake/cake.module';

@Module({
  imports: [CoffeeModule, CakeModule],   
  // 控制器
  controllers: [AppController, CakeController],
  // 服务 nest generate service / nest g s
  /**
   * server即provider
   */
  providers: [AppService, CakeService],
})
export class AppModule {}
