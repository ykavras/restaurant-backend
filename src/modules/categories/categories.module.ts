import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Categories } from './entities/categories.entity';
import { MenusModule } from '../menus/menus.module';

@Module({
  exports: [CategoryService],
  imports: [TypeOrmModule.forFeature([Categories]), MenusModule],
  providers: [CategoryService],
  controllers: [CategoriesController],
})
export class CategoryModule {}
