import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/Schemas/user.schema';
import { userDataTypeDto } from 'src/Utils/userDataTypeDto.dto';
import { Task, TaskDocument } from 'src/user/Schemas/task.schema';
import { TaskDataDto } from 'src/user/Dtos/CreateTask.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}

  async createUser(userData: userDataTypeDto): Promise<User> {
    const createdUser = new this.userModel(userData);
    return await createdUser.save();
  }

  async findUser(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID '${id}' not found`);
    }
    return user;
  }

  async updateUser(id: string, updateData: Partial<User>): Promise<User> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, { $set: updateData }, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException(
        `Unable to update: User with ID '${id}' not found`,
      );
    }

    return updatedUser;
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.userModel.findByIdAndDelete(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID '${id}' not found`);
    }
    return user;
  }

  async createTask(userId: string, taskData: TaskDataDto): Promise<User> {
    const user = await this.findUser(userId);

    if (!user)
      throw new NotFoundException(`User with ID '${userId}' not found`);

    const createdTask = new this.taskModel({
      ...taskData,
      createdAt: new Date(),
      completed: taskData.completed ?? false,
    });

    const task: TaskDocument = await createdTask.save();

    if (!user.tasks) user.tasks = [];
    user.tasks.push(task.id);
    await user.save();

    return user;
  }
}
