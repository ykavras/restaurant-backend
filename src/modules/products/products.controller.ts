import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandsService } from '../brands/brands.service';
import { CategoryService } from '../categories/categories.service';
import { ProductsDto } from './dtos/products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryService,
    private brandsService: BrandsService,
  ) {}

  @Get('list')
  async get() {
    return await this.productsService.findAll();
  }

  @Post('create')
  async create(@Body() productsDto: ProductsDto) {
    const { categoryId, brandId } = productsDto;

    // Get Category
    const category = await this.categoryService.findById(categoryId);
    productsDto.category = category;

    // Get Brand if not null
    if (brandId) {
      const brand = await this.brandsService.findById(brandId);
      productsDto.brand = brand;
    }

    return this.productsService.create(productsDto);
  }
}
