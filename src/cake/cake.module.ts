import { Module } from '@nestjs/common';
import { CakeController } from './cake.controller';
import { CakeService } from './cake.service';

@Module({
    controllers:[CakeController],
    providers:[CakeService]
})
export class CakeModule {}
