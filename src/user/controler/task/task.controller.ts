import {
    Controller,
    Get,
    Param,
    Delete,
    NotFoundException,
    InternalServerErrorException,
  } from '@nestjs/common';
import { TaskService } from 'src/user/service/task/task.service';
  
  @Controller('task')
  export class TaskController {
    constructor(private readonly taskService: TaskService) {}
  
    @Get()
    async getAllTasks() {
      try {
        return await this.taskService.getAllTasks();
      } catch (error) {
        throw new InternalServerErrorException('Failed to fetch tasks');
      }
    }
  
    @Get(':id')
    async getTask(@Param('id') id: string) {
      try {
        return await this.taskService.getTask(id);
      } catch (error) {
        if (error instanceof NotFoundException) throw error;
        throw new InternalServerErrorException(`Failed to fetch task with ID '${id}'`);
      }
    }
  
    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
      try {
        return await this.taskService.deleteTask(id);
      } catch (error) {
        if (error instanceof NotFoundException) throw error;
        throw new InternalServerErrorException(`Failed to delete task with ID '${id}'`);
      }
    }
  }
  