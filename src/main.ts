import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // AppModule 应用程序根模块
  const app = await NestFactory.create(AppModule);
  // 验证
  // npm i class-validator class-transformer
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  // 开启白名单模式，能将多余数据过滤掉
    forbidNonWhitelisted: true, // 非白名单数据报错
    transform: true, // 将传入数据自动变化为制定额度dto类型
  })) 
  await app.listen(3000);
}
bootstrap();
