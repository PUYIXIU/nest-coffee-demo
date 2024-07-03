import { CreateCakeDto } from './dto/create-cake.dto/create-cake.dto';
import { HttpCode, HttpException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Cake } from './entities/cake.entity';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UpdateCakeDto } from './dto/update-cake.dto/update-cake.dto';

@Injectable()
export class CakeService {

    // 关联数据库
    constructor(
        @InjectRepository(Cake)
        private readonly cakeRepository: Repository<Cake>
    ){}

    // 被操控的数据库
    private cakes:Cake[] = [
        {id:1,name:'芝士蛋糕',price:10,flavors:['芝士']},
        {id:2,name:'巧克力蛋糕',price:12,flavors:['巧克力']},
    ] 

    /**
     * 新增蛋糕
     * @param cake 
     */
    async create(createCakeDto: CreateCakeDto){
        const cake = this.cakeRepository.create(createCakeDto)
        return this.cakeRepository.save(cake)
    }

    /**
     * 删除蛋糕
     * @param cake 
     */
    async delete(id: number){
        const cake = await this.findOne(id)
        return this.cakeRepository.remove(cake) 
    }

    /**
     * 修改蛋糕
     * @param id 
     * @param cake 
     */
    async update(id:number, updateCoffeeDto:UpdateCakeDto){
        // preload 更新 找不到指定id返回undefined
        const cake = await this.cakeRepository.preload({
            id:id,
            ...updateCoffeeDto
        })
        if(!cake){
            throw new NotFoundException(`Cake #${id} is not exit`)
        }
        return this.cakeRepository.save(cake)
    }

    /**
     * 查找全部
     */
    findAll(){
        return this.cakeRepository.find()
    }

    /**
     * 查找指定蛋糕
     */
    async findOne(id:number){
        const cake = await this.cakeRepository.findOne({
            where:{
                id:id
            }
        })
        // let cake = this.cakes.find(item=>item.id == id)
        if(!cake){
            throw new NotFoundException(`Cake #${id} is not find`)
        }
        return cake
    }
}
