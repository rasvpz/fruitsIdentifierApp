import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from 'src/auth/Dto/signup.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor(private readonly UserService: UsersService) {}

    @Post('/signup')
    userSignUp(@Body() signUpData : SignUpDto) {
        console.log(signUpData)
      return this.UserService.createUser(signUpData);
    }


}
