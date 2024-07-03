import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  /**
   * 查找全部
   */
  findAll(){
    return this.coffees
  }

  /**
   * 根据id返回指定值
   * @param id 
   */
  findOne(id:number){
    // throw 'errorrrrrrrrrrrrr' // 错误码为500
    const coffee = this.coffees.find(item=>item.id === id)
    if(!coffee){
        // 抛出对应网络异常
        // throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND)
        throw new NotFoundException(`Coffee #${id} not found`)
    }
    return coffee
  }

  /**
   * 新建
   * @param createCoffeeDto 
   */
  create(createCoffeeDto: any){
    this.coffees.push(createCoffeeDto);
    return this.coffees
  }

  /**
   * 更新
   * @param id 
   * @param updateCoffeeDto 
   */
  update(id: number,updateCoffeeDto: any){
    const existingCoffee = this.findOne(id)
    if(existingCoffee){
        // update this entoty
        Object.assign(existingCoffee, updateCoffeeDto)
        return existingCoffee
    }
    return 'cant find'
  }
    /**
     * 
     * @param id 删除
     */
    remove(id:string){
        const coffeeIndex = this.coffees.findIndex(item=>item.id == + id)
        if(coffeeIndex >= 0){
            this.coffees.splice(coffeeIndex,1)
        }
    }  
}
