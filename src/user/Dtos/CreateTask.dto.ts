import { Optional } from "@nestjs/common";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";


export class TaskDataDto{
    
    @IsNotEmpty()
    @IsString()
    name:string;

    @Optional()
    @IsString()
    description?:string;

    @Optional()
    @IsBoolean()
    completed?:boolean;

    
}