import { Module } from '@nestjs/common';
import { Task, TaskSchema } from '../Schemas/task.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from '../controler/task/task.controller';
import { TaskService } from '../service/task/task.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {


}