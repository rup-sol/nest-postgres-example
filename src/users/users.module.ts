// src/users/users.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from '../users/users.entity'; // Import User entity

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Registers User repository
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
