import { Brands } from 'src/modules/brands/entities/brands.entity';
import { Categories } from 'src/modules/categories/entities/categories.entity';
import { Variants } from 'src/modules/variants/entities/variants.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relations

  // Brand
  @Column({ nullable: true })
  brandId: string;

  @ManyToOne(() => Brands, { cascade: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'brandId' })
  brand: Brands;

  // Category
  @Column()
  categoryId: string;

  @ManyToOne(() => Categories, { cascade: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'categoryId' })
  category: Categories;

  // Variant
  @OneToMany(() => Variants, (variant) => variant.product)
  variants: Variants[];
}
