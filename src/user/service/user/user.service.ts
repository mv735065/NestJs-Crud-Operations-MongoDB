import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { privateDecrypt } from 'crypto';
import { User, UserDocument } from 'src/user/Schemas/user.schema';
import { userDataTypeDto } from 'src/Utils/userDataTypeDto.dto';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
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
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true },
    ).exec();

    if (!updatedUser) {
      throw new NotFoundException(`Unable to update: User with ID '${id}' not found`);
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

}
