import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export default class UpdateProductDTO {
    @IsString()
    @ApiProperty()
    public id: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    public name: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    public description: string;

    @IsOptional()
    @IsBoolean()
    @ApiProperty()
    public enabled: boolean;

    @IsOptional()
    @IsNumber()
    @ApiProperty()
    public price: number;

    @IsOptional()
    @ApiProperty()
    public categories: { id: string }[];
}
