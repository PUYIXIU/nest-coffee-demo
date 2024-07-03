import { CakeService } from './cake.service';
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
import {CreateCakeDto} from './dto/create-cake.dto/create-cake.dto'
import { UpdateCakeDto } from './dto/update-cake.dto/update-cake.dto';

@Controller('cake')
export class CakeController {
    constructor(private readonly cakeService: CakeService){}

    // 查询所有蛋糕
    @Get('getMenu')
    getMenu(){
        return this.cakeService.findAll()
    }

    // 查询指定蛋糕
    @Get('getInfo/:id')
    findOne(@Param('id') id:number){
        return this.cakeService.findOne(id)
    }

    // 新增蛋糕
    @Post('add')
    add(@Body() createCakeDto:CreateCakeDto){
        return this.cakeService.create(createCakeDto)
    }

    // 更新蛋糕
    @Patch('edit/:id')
    edit(@Param('id') id:number ,@Body() updateCakeDto:UpdateCakeDto){
        return this.cakeService.update(id, updateCakeDto)
    }

    // 删除蛋糕
    @Delete('delete/:id')
    delete(@Param('id') id:number){
        return this.cakeService.delete(id)   
    }
}
