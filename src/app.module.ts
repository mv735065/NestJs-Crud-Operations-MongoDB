import { Module } from '@nestjs/common';
import { UserModule } from './user/module/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './user/module/task.module';


@Module({
  imports: [
     MongooseModule.forRoot('mongodb://localhost:27017/nest-users'),
     TaskModule,
     UserModule
     ],
})
export class AppModule {}
