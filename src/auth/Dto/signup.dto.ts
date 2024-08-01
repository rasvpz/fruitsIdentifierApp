import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SignUpDto {

    @IsNotEmpty()
    @MinLength(3)
    username : string

    @IsEmail()
    email : string

    @IsNotEmpty()
    @MinLength(4)
    password : string
}