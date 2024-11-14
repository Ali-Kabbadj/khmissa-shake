import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { jwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(jwtGuard)
  @Get(':id')
  async getUserProfile(@Param('id') id: string) {
    return await this.userService.findById(id);
  }
}
