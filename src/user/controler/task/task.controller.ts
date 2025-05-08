import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { TaskDataDto } from 'src/user/Dtos/CreateTask.dto';
import { TaskService } from 'src/user/service/task/task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }
} 
