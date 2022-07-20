import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { BrandsDto } from 'src/modules/brands/dtos/brands.dto';
import { CategoriesDto } from 'src/modules/categories/dtos/categories.dto';
import { Variants } from 'src/modules/variants/entities/variants.entity';

export class ProductsDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  isActive: boolean;

  created_at: Date;
  updated_at: Date;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  brandId: string;

  brand: BrandsDto;

  @IsString()
  @IsNotEmpty()
  categoryId: string;

  category: CategoriesDto;

  variants: Variants[];
}
