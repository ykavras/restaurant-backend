import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ProductsDto } from 'src/modules/products/dtos/products.dto';

export class VariantsDto {
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

  @IsString()
  @IsNotEmpty()
  productId: string;

  product: ProductsDto;

  created_at: Date;
  updated_at: Date;
}
