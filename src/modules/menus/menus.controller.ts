import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MenusDto } from './dtos/menus.dto';
import { MenusService } from './menus.service';

@Controller('menus')
export class MenusController {
  constructor(private menusService: MenusService) {}

  @Get('list')
  async get() {
    try {
      return await this.menusService.findAll();
    } catch (error) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
  }

  @Post('create')
  async create(@Body() menusDto: MenusDto) {
    return await this.menusService.create(menusDto);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() menusDto: MenusDto) {
    return this.menusService.update(id, menusDto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.menusService.delete(id);
  }
}
