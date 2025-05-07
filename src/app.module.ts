import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
     MongooseModule.forRoot('mongodb://localhost:27017/nest-users'),
     UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
