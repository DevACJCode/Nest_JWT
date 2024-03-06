import { Body, Controller, Post } from '@nestjs/common';
import { IGetTokenRequestDTO } from './dtos/IGetTokenRequestDTO';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('getToken')
  async getToken(@Body() body: IGetTokenRequestDTO) {
    return await this.authService.getToken(body);
  }
}
