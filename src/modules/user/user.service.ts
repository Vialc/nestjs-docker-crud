import { PrismaService } from '../../database/PrismaService';

import { UserDTO } from './user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDTO) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      throw new Error('User already exists');
    }

    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }
}
