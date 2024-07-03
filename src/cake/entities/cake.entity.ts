import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

// 实体类描述符
@Entity('cake')
export class Cake{

    // 主键描述符
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    price: number;
    
    // 可空描述
    @Column('json', {nullable:true})
    flavors: string[];
}