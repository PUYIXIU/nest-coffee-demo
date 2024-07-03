import {IsString} from 'class-validator'

// coffee/create/ eto
export class CreateCoffeeDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;

    @IsString({each:true})
    readonly flavors: string[];
}
