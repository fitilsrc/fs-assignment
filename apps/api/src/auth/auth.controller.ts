import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInType, TokensType } from '@app/shared';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  /**
   * User login endpoint
   * @param payload
   * @returns Promise<TokensType>
   */
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Body() payload: SignInType
  ): Promise<TokensType> {
    return await this.authService.signIn(payload);
  }

  /**
   * Refresh user tokens endpoint
   * @param payload
   * @returns Promise<TokensType>
   */
  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  async refreshTokens(
    @Body() payload: { refresh_token: string }
  ): Promise<TokensType> {
    return await this.authService.refreshTokens(payload.refresh_token);
  }

  /**
   * User logout endpoint
   * @param payload
   * @returns Promise<void>
   */
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async signOut(
    @Body() payload: TokensType
  ): Promise<void> {
    return await this.authService.signOut(payload);
  }
}
