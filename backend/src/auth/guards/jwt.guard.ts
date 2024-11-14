import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class jwtGuard implements CanActivate {
  constructor(private jwtServicee: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeadeer(request);
    if (!token) throw new UnauthorizedException();
    try {
      const payload = await this.jwtServicee.verifyAsync(token, {
        secret: process.env.jwtSecretKey,
      });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeadeer(request: Request) {
    const [type, token] = request.headers.authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
