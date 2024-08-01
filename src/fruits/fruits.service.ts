import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fruit, FruitDocument } from './schemas/fruit.schema';
import { CreateFruitDto } from './create-fruit.dto';

interface Characteristics {
  skinColor?: string | string[];
  seeds?: number;
  size?: string;
}

interface Query {
  skinColor?: { $in: string[] };
  seeds?: number;
  size?: string;
}

@Injectable()
export class FruitsService {
  private readonly logger = new Logger(FruitsService.name);

  constructor(@InjectModel(Fruit.name) private fruitModel: Model<FruitDocument>) {}

  async create(createFruitDto: CreateFruitDto): Promise<Fruit> {
    const createdFruit = new this.fruitModel(createFruitDto);
    return createdFruit.save();
  }

  async findAll(): Promise<Fruit[]> {
    return this.fruitModel.find().exec();
  }

  async identifyFruit(characteristics: Characteristics): Promise<Fruit | null> {
    const query: Query = {};

    // Handle skinColor which could be a single string or an array of strings
    if (characteristics.skinColor) {
      query.skinColor = Array.isArray(characteristics.skinColor)
        ? { $in: characteristics.skinColor }
        : { $in: [characteristics.skinColor] };
    }

    if (characteristics.seeds !== undefined) {
      query.seeds = characteristics.seeds;
    }

    if (characteristics.size) {
      query.size = characteristics.size;
    }

    try {
      return await this.fruitModel.findOne(query).exec();
    } catch (error) {
      this.logger.error('Error identifying fruit', error.stack);
      throw new Error('Error identifying fruit');
    }
  }
}
