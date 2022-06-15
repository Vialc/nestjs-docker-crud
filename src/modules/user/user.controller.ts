import { UserDTO } from './../user/user.dto';
import { Controller, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: UserDTO) {
    return this.userService.create(data);
  }
}
