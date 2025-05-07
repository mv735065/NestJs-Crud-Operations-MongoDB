

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Task } from './task.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true})
  email: string;

  @Prop()
  age: number;
  
  @Prop({type:[Task],default:[]})
  tasks:Task[]
  
}



export const UserSchema = SchemaFactory.createForClass(User);