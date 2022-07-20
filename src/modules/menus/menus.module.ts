import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menus } from './entities/menus.entity';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';

@Module({
  exports: [MenusService],
  imports: [TypeOrmModule.forFeature([Menus])],
  providers: [MenusService],
  controllers: [MenusController],
})
export class MenusModule {}
