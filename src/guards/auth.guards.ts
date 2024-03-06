import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.getTokenFromHeader(request);
    try {
      await this.jwtService.verifyAsync(token, { secret: 'agnaldo' });
    } catch (error) {
      throw new UnauthorizedException('Falha na autenticação!');
    }
    return true;
  }

  private getTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (!type || type !== 'Bearer')
      throw new UnauthorizedException('Tipo do token informado é inválido!');

    if (!token) throw new UnauthorizedException('Token inválido!');
    return token;
  }
}
