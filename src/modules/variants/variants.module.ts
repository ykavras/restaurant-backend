import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from '../products/products.module';
import { Variants } from './entities/variants.entity';
import { VariantsController } from './variants.controller';
import { VariantsService } from './variants.service';

@Module({
  exports: [VariantsService],
  imports: [TypeOrmModule.forFeature([Variants]), ProductsModule],
  providers: [VariantsService],
  controllers: [VariantsController],
})
export class VariantsModule {}
