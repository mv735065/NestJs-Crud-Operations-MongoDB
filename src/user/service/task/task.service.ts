import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDataDto } from 'src/user/Dtos/CreateTask.dto';
import { Task, TaskDocument } from 'src/user/Schemas/task.schema';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel:Model<TaskDocument> ){}

    
}
