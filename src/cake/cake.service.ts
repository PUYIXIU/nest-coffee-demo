import { HttpCode, HttpException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Cake } from './entities/cake.entity';

@Injectable()
export class CakeService {
    // 被操控的数据库
    private cakes:Cake[] = [
        {id:1,name:'芝士蛋糕',price:10,flavors:['芝士']},
        {id:2,name:'巧克力蛋糕',price:12,flavors:['巧克力']},
    ]

    /**
     * 新增蛋糕
     * @param cake 
     */
    create(cake: any){
        let sameNameCake = this.cakes.find(i=>i.name == cake.name)
        if(sameNameCake){
            throw new NotAcceptableException(`Aready has a cake called ${cake.name}`)
        }
        cake.id = this.cakes.length
        this.cakes.push(cake)
        return cake        
    }

    /**
     * 删除蛋糕
     * @param cake 
     */
    delete(id: number){
        let index = this.cakes.findIndex(i=>i.id == id)
        if(index<0){
            throw new NotFoundException(`Cake #${id} is not exit`)
        }
        this.cakes.splice(index,1)
        return `success delete #${id}`
    }

    /**
     * 修改蛋糕
     * @param id 
     * @param cake 
     */
    update(id:number, cake:any){
        let targetCake = this.findOne(id)
        if(!targetCake){
            throw new NotFoundException(`Cake #${id} is not exit`)
        }
        if(cake.name !== undefined){
            let sameNameCake = this.cakes.find(i=>i.name == cake.name)
            if(sameNameCake){
                throw new NotAcceptableException(`Aready has a cake called ${cake.name}`)
            }
        }
        Object.assign(targetCake, cake)
        return targetCake
    }

    /**
     * 查找全部
     */
    findAll(){
        return this.cakes
    }

    /**
     * 查找指定蛋糕
     */
    findOne(id:number){
        let cake = this.cakes.find(item=>item.id == id)
        if(!cake){
            throw new NotFoundException(`Cake #${id} is not find`)
        }
        return cake
    }
}
