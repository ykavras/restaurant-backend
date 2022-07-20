import { IsNotEmpty, IsString } from 'class-validator';
import { ProductsDto } from 'src/modules/products/dtos/products.dto';

export class BrandsDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  isActive: boolean;

  created_at: Date;
  updated_at: Date;

  products: ProductsDto[];
}
