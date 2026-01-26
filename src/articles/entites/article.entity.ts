// src/users/entities/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column()
  description: string; // hashed later

  @Column()
  body: string;

  @CreateDateColumn()
  createdAt: Date;

    // updated at column
  @UpdateDateColumn()
  updatedAt: Date;
}
