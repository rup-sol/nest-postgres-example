// src/users/users.controller.ts

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../users/users.entity';
import { CreateUserDto } from '../users/users.dto'; // Ensure DTO is set up

@Controller('users') // Base route: /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users - Retrieve all users
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // GET /users/:id - Retrieve a user by ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id); // Convert id to number
  }

  // POST /users - Create a new user
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  // DELETE /users/:id - Delete a user by ID
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(+id); // Convert id to number
  }
}
