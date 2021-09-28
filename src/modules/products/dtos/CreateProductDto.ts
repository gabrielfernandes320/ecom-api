import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';

export default class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    public name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    public description: string;

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    public enabled: boolean;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    public price: number;

    @IsOptional()
    @ApiProperty()
    public categories: { id: string }[];
}
