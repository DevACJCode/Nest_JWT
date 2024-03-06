import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IGetTokenRequestDTO } from './dtos/IGetTokenRequestDTO';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async getToken(body: IGetTokenRequestDTO): Promise<{ token: string }> {
    if (body.user !== 'agnaldo' || body.password !== '123456')
      throw new UnauthorizedException();

    const token = await this.jwtService.signAsync(body, { secret: 'agnaldo' });
    return { token };
  }
}
