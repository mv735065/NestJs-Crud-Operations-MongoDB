import { Module } from '@nestjs/common';
import { UserModule } from './user/module/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './user/module/task.module';
import { TaskController } from './user/controler/task/task.controller';
import { TaskService } from './user/service/task/task.service';
import { UserController } from './user/controler/user/user.controller';
import { UserService } from './user/service/user/user.service';


@Module({
  imports: [
     MongooseModule.forRoot('mongodb://localhost:27017/nest-users'),
     TaskModule,
     UserModule
     ],
  controllers: [TaskController,UserController],
  providers: [TaskService,UserService],
})
export class AppModule {}
