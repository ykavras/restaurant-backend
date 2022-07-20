import { Module } from '@nestjs/common';
import { VariantsModule } from './variants/variants.module';
import { BrandsModule } from './brands/brands.module';
import { VariantsModule } from './variants/variants.module';
import { VariantsModule } from './variants/variants.module';

@Module({
  imports: [VariantsModule, BrandsModule],
})
export class Module {}
