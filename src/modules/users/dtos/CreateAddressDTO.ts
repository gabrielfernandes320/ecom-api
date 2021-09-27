import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export default class CreateAddressDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    public zipCode: string;

    @IsNotEmpty()
    @ApiProperty()
    public street: string;

    @IsNotEmpty()
    @ApiProperty()
    public city: string;

    @IsNotEmpty()
    @ApiProperty()
    public state: string;

    @IsNotEmpty()
    @ApiProperty()
    public country: string;

    @IsNotEmpty()
    @ApiProperty()
    public number: number;

    @IsOptional()
    @ApiProperty()
    public complement: number;
}
