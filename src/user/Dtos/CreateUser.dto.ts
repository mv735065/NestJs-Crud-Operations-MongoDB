import { IsEmail, IsNotEmpty, IsInt, IsOptional,Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @IsOptional()
  @Min(0)
  age: number;
}