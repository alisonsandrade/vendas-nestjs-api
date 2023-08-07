import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  async getAllUsers() {
    return JSON.stringify({ message: 'teste' });
  }

  @Post()
  async createUsers(@Body() createUser: CreateUserDto) {
    return JSON.stringify(createUser);
  }
}
