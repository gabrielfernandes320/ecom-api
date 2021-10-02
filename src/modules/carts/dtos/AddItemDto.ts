import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export default class AddItemDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    public productId: string;

    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    @ApiProperty()
    public quantity: number;
}
