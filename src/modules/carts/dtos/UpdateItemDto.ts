import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class UpdateItemDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    public productId: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    public quantity: number;
}
