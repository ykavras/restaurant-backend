import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './modules/brands/brands.module';
import { CategoryModule } from './modules/categories/categories.module';
import { MenusModule } from './modules/menus/menus.module';
import { ProductsModule } from './modules/products/products.module';
import { VariantsModule } from './modules/variants/variants.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: 'ykavras',
      entities: [__dirname + '/../**/*.entity{ts,js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    MenusModule,
    CategoryModule,
    ProductsModule,
    VariantsModule,
    BrandsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
