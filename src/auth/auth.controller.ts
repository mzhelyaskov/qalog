import { GoogleOAuthGuard } from '@app/auth/guards/google-oauth.guard';
import { LocalAuthGuard } from '@app/auth/guards/local-auth.guard';
import { HttpAuthRequest, HttpAuthResponse } from '@app/auth/models/http-auth-request';
import { JwtAccessToken } from '@app/auth/models/jwt-access-token';
import { AuthService } from '@app/auth/services/auth.service';
import { RedirectService } from '@app/infra/services/redirect.service';
import { Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private redirectService: RedirectService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req: HttpAuthRequest, @Response() res: HttpAuthResponse): void {
    const token: JwtAccessToken = this.authService.createAccessToken(req.user);
    this.redirectService.redirectWithToken(token.accessToken, res);
  }

  @Post('logout')
  @UseGuards(LocalAuthGuard)
  async logout(@Request() req: any): Promise<any> {
    // TODO Verify how to logout
    return req.logout();
  }

  @Get('google')
  @UseGuards(GoogleOAuthGuard)
  googleAuth(): void {}

  @Get('google/callback')
  @UseGuards(GoogleOAuthGuard)
  googleAuthCallback(@Request() req: HttpAuthRequest, @Response() res: HttpAuthResponse): void {
    const token: JwtAccessToken = this.authService.createAccessToken(req.user);
    this.redirectService.redirectWithToken(token.accessToken, res);
  }
}