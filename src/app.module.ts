import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';
import { CakeModule } from './cake/cake.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CoffeeModule, CakeModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username:'postgres',
    password:'ashley122',
    database:'postgres',
    autoLoadEntities:true,
    synchronize:true, // 实体与数据库同步
  })],   
  // 控制器
  controllers: [AppController],
  // 服务 nest generate service / nest g s
  /**
   * server即provider
   */
  providers: [AppService],
})
export class AppModule {}
