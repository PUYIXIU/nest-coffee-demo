import {IsString, IsNumber} from 'class-validator'
export class CreateCakeDto {
    
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly price: number;

    @IsString({each:true})
    readonly flavors:string[]
}
