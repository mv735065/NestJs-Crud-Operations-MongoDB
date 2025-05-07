import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
  Put,
  Query,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { TaskDataDto } from 'src/user/Dtos/CreateTask.dto';
import { CreateUserDto } from 'src/user/Dtos/CreateUser.dto';
import { User } from 'src/user/Schemas/user.schema';
import { TaskService } from 'src/user/service/task/task.service';
import { UserService } from 'src/user/service/user/user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService, 
        private readonly taskService: TaskService
      ) {}

  

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async createUser(@Body() userData: CreateUserDto) {
    try {
      return await this.userService.createUser(userData);
    } catch (error) {
      throw new HttpException(
        { message: 'Failed to create user', error: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findUser(@Query('id') id: string) {
    try {
      const user = await this.userService.findUser(id);
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (error) {
        if (error instanceof NotFoundException) {
            throw error;
          }
      throw new HttpException(
        { message: 'Failed to fetch user', error: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put()
  async updateUser(@Query('id') id: string, @Body() updateData: Partial<User>) {
    try {
      const updatedUser = await this.userService.updateUser(id, updateData);
      return updatedUser;
    } catch (error) {
        if (error instanceof NotFoundException) {
            throw error;
          }
      throw new HttpException(
        { message: 'Failed to update user', error: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('all')
  async getAllUsers() {
    try {
      const users = await this.userService.getAllUsers();
      return users;
    } catch (error) {
        if (error instanceof NotFoundException) {
            throw error;
          }
      throw new HttpException(
        { message: 'Failed to retrieve users', error: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete()
  async deleteUser(@Query('id') id: string) {
    try {
      const deletedUser = await this.userService.deleteUser(id);
      return {
        message: 'User successfully deleted',
        data: deletedUser,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
  
      throw new HttpException(
        { message: 'Failed to delete user', details: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }


  @Post('createTask')
  async createTask(@Query('userId') userId:string,@Body() taskData:TaskDataDto){
       try {
            return await this.taskService.createTask(userId,taskData);
          } catch (error) {
            throw new HttpException(
              { message: 'Failed to create task', error: error.message },
              HttpStatus.BAD_REQUEST,
            );
          }
  }

  
  

}
