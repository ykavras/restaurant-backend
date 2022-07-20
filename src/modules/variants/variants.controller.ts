import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { VariantsDto } from './dtos/variants.dto';
import { VariantsService } from './variants.service';

@Controller('variants')
export class VariantsController {
  constructor(
    private variantsService: VariantsService,
    private productsService: ProductsService,
  ) {}

  @Get('list')
  async get() {
    return await this.variantsService.findAll();
  }

  @Post('create')
  async create(@Body() variantsDto: VariantsDto) {
    const product = await this.productsService.findById(variantsDto.productId);

    variantsDto.product = product;

    return await this.variantsService.create(variantsDto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.variantsService.delete(id);
  }
}
