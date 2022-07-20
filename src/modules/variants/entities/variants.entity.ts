import { Products } from 'src/modules/products/entities/products.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Variants {
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

  @Column({ type: 'string' })
  productId: string;

  @ManyToOne(() => Products, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productId' })
  product: Products;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
