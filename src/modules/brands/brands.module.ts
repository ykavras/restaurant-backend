import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { Brands } from './entities/brands.entity';

@Module({
  exports: [BrandsService],
  imports: [TypeOrmModule.forFeature([Brands])],
  providers: [BrandsService],
  controllers: [BrandsController],
})
export class BrandsModule {}
