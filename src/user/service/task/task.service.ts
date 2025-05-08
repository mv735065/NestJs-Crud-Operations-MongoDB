import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDataDto } from 'src/user/Dtos/CreateTask.dto';
import { Task, TaskDocument } from 'src/user/Schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async getAllTasks(): Promise<TaskDocument[]> {
    return this.taskModel.find()
  }

  async getTask(id:string):Promise<TaskDocument>{
    const task=await this.taskModel.findById(id)
    if(!task) throw new NotFoundException("Task with Id not found")
    return task;
  }

  async deleteTask(id:string):Promise<TaskDocument>{
    const task = await this.taskModel.findByIdAndDelete(id).exec();
    if (!task) {
      throw new NotFoundException(`Task with ID '${id}' not found`);
    }
    return task;
  }
}
