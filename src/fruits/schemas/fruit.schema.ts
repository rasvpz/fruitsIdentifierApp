import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FruitDocument = Fruit & Document;

@Schema()
export class Fruit {
  @Prop()
  name: string;

  @Prop([String]) // Updated to allow an array of strings
  skinColor: string[]; // Change to array of strings

  @Prop()
  seeds: number;

  @Prop()
  size: string;
}

export const FruitSchema = SchemaFactory.createForClass(Fruit);
