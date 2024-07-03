// npm i @nestjs/mapped-types

import {PartialType} from '@nestjs/mapped-types'
import { CreateCoffeeDto } from '../create-coffee.dto/create-coffee.dto';

// PartialType用于给将每个属性变为可选值 @IsOptional()
// 同时继承装饰器类型
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) { }
