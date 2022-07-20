import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { MenusDto } from 'src/modules/menus/dtos/menus.dto';

export class CategoriesDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  isActive: boolean;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  menuId: string;

  menu: MenusDto;

  created_at: Date;
  updated_at: Date;
}
