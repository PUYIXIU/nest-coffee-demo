import { CoffeeService } from './coffee.service';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Patch,
  Delete,
  Query
} from '@nestjs/common';
import { off } from 'process';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

//映射路由
@Controller('coffee')
export class CoffeeController {

  constructor(private readonly coffeeService: CoffeeService){ }

  // 直接调用express库方法
  @Get('candy')
  yummy(@Res() response) {
    response.status(200).send('yummy candy');
  }

  /*********************** */

  // /coffee/coffeeMenu?limit=100&&offset=20
  @Get('coffeeMenu')
  queryCoffeeMenu(@Query() paginationQuery){
    const {limit, offset} = paginationQuery
    return `Limit:${limit}, offset:${offset}`
  }

  /***********************  */

  // 查询所有
  @Get('findAll')
  findAll() {
    return this.coffeeService.findAll()
  }

  // 指定查询
  @Get(':id')
  // findOne(@Param() params){ // 获取所有params参数
  findOne(@Param('id') id: number) {
    return this.coffeeService.findOne(id)
  }

  // 新增
  @Post()
  create(@Body() createCoffeeDto:CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto)
    return this.coffeeService.create(createCoffeeDto);
  }


  // 更新
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCoffeeDto:UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto)
  }

  // 删除
  @Delete(':id')
  remove(@Param('id') id:string){
    return this.coffeeService.remove(id)
  }
}
