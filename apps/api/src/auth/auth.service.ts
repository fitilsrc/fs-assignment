import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { SignInType, TokensType } from "@app/shared";
import { jwtDecode } from "jwt-decode";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  /**
   * Login user with credential
   * @param { username, password }
   * @returns Promise<TokensType>
   */
  async signIn({ username, password }: SignInType): Promise<TokensType> {
    const user = await this.usersService.getUserByName(username);

    this.logger.log(`User ${username} trying to log in`);

    if (user?.password !== password) {
      this.logger.log(`Access is denied`);
      throw new UnauthorizedException();
    };

    const payload = {
      username: user.username,
      given_name: user.given_name,
      family_name: user.family_name,
    };

    this.logger.log(`User ${username} successfully logged in`);

    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '3d' }),
    }
  }

  /**
   * Refresh user tokens
   * @param refresh_token
   * @returns Promise<TokensType>
   */
  async refreshTokens(refresh_token: string): Promise<TokensType> {
    const decoded = jwtDecode<Record<string, string>>(refresh_token);

    this.logger.log(`Incoming token decoded ${JSON.stringify(decoded)}`);

    const payload = {
      username: decoded.username,
      given_name: decoded.given_name,
      family_name: decoded.family_name,
    };

    this.logger.log(`User ${decoded.username} tokens successfully refreshed`);

    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '3d' }),
    }
  }

  /**
   * Logout user and delete sessions
   */
  async signOut(tokens: TokensType): Promise<void> {
    // to do delete session from a database
    this.logger.log(`User successfully logged in`);
  }
}