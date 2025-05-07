import { Module } from '@nestjs/common';
import { UserController } from '../controler/user/user.controller';
import { UserService } from '../service/user/user.service';
import { User, UserSchema } from '../Schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {


}
