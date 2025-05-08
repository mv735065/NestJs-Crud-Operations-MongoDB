
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task{
  @Prop({required:true,unique:true})
  name:string;

  @Prop()
  description?:string;

  @Prop({default:false})
  completed:boolean

  @Prop({default:() => new Date()})
  createdAt:Date
}

export const TaskSchema= SchemaFactory.createForClass(Task)