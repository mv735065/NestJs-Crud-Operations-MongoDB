import { Module } from '@nestjs/common';
import { UserController } from '../controler/user/user.controller';
import { UserService } from '../service/user/user.service';
import { User, UserSchema } from '../Schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from '../Schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Task.name, schema: TaskSchema }
    ])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {


}
