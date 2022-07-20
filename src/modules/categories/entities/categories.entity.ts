import { Expose } from 'class-transformer';
import { Menus } from 'src/modules/menus/entities/menus.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

export const RESPONSE1 = 'response1';
export const RESPONSE2 = 'response2';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  @Expose({ groups: [RESPONSE1, RESPONSE2] })
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column()
  description: string;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relations

  @Column({ type: 'string', nullable: true })
  menuId: string;

  @ManyToOne(() => Menus, { cascade: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'menuId' })
  menu: Menus;
}
