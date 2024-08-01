import { Injectable } from '@nestjs/common';
import { SignUpDto } from './Dto/signup.dto';

@Injectable()
export class AuthService {
    signUp(data : SignUpDto) {
        console.log('data', data)
        return data;
      }
}
