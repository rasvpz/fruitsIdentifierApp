// src/fruits/fruits.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FruitsService } from './fruits.service';
import { FruitsController } from './fruits.controller';
import { Fruit, FruitSchema } from './schemas/fruit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Fruit.name, schema: FruitSchema }]),
  ],
  controllers: [FruitsController],
  providers: [FruitsService],
})
export class FruitsModule {}
