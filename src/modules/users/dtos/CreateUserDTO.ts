import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import CreateAddressDTO from './CreateAddressDTO';

export default class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    public name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ example: 'youremail@email.com' })
    public email: string;

    @IsNotEmpty()
    @ApiProperty()
    public address: CreateAddressDTO[];

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    public enabled: boolean;
}
