import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { SignUpDto } from 'src/auth/Dto/signup.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(userData: SignUpDto): Promise<UserDocument> {
        try {
          const salt = await bcrypt.genSalt();
          const newPassword = await bcrypt.hash(userData.password, salt);
          const createdUser = await this.userModel.create({
            ...userData,
            password: newPassword,
          });
          return createdUser;
        } catch (error) {
          if (error.code === 11000) { // Check for duplicate key error
            throw new BadRequestException('Email already exists');
          } else {
            throw error; // Rethrow other errors
          }
        }
      }
            

    async getUserByEmail(email: String): Promise <UserDocument> {   

        const user = await this.userModel.findOne({email})
        if(!user) {
            throw new NotFoundException()
        }
        return user;
    }


}
