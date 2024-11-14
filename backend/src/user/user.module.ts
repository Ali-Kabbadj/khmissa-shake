import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, JwtService],
})
export class UserModule {}
