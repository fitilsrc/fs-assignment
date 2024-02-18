import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";
import { LocalStrategy } from "./strategies/local-strategy";
import { JwtStrategy } from "./strategies/jwt-strategy";

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: '3h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})

export class AuthModule {}
