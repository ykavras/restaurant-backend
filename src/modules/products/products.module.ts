import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { CategoryModule } from '../categories/categories.module';
import { BrandsModule } from '../brands/brands.module';

@Module({
  exports: [ProductsService],
  imports: [TypeOrmModule.forFeature([Products]), CategoryModule, BrandsModule],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
