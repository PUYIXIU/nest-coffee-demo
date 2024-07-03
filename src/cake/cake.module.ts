import { Module } from '@nestjs/common';
import { CakeController } from './cake.controller';
import { CakeService } from './cake.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Cake} from './entities/cake.entity' 

@Module({
    // 每个子模块为自己注册实体
    imports:[TypeOrmModule.forFeature([Cake])],
    controllers:[CakeController],
    providers:[CakeService]
})
export class CakeModule {}
