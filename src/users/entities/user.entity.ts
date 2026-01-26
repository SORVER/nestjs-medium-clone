// src/users/entities/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  username: string;

  @Column()
  password: string; // hashed later

  @Column({ nullable: true })
  bio: string;

  @CreateDateColumn()
  createdAt: Date;

    // updated at column
  @UpdateDateColumn()
  updatedAt: Date;
}
