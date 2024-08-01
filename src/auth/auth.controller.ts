import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './Dto/signup.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly AuthService: AuthService) {}

    @Post()
    signUp(@Body() signUpData : SignUpDto) {
      return this.AuthService.signUp(signUpData);
    }

}
