import { IsNotEmpty, IsString } from 'class-validator';

export class MenusDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  isActive: boolean;

  created_at: Date;
  updated_at: Date;
}
