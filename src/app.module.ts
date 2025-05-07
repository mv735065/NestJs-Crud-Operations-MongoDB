import { Module } from '@nestjs/common';
import { UserModule } from './user/module/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './user/module/task.module';
import { TaskController } from './user/controler/task/task.controller';
import { TaskService } from './user/service/task/task.service';


@Module({
  imports: [
     MongooseModule.forRoot('mongodb://localhost:27017/nest-users'),
     UserModule,
     TaskModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
