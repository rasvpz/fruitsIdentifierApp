import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { FruitsModule } from './fruits/fruits.module'

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://bigoAtlas:W5QMMf2WtSU23XGD@bigo.tpoon.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    FruitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
