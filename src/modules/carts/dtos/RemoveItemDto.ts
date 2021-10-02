import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export default class RemoveItemDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    public productId: string;
}
