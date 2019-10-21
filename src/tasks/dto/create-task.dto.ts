import { IsNotEmpty } from 'class-validator';

export class CretaeTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}