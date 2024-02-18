import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from '@app/shared';
import { DummyModule } from './dummy/dummy.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './.env'
  }), AuthModule, UsersModule, SharedModule, DummyModule],
})
export class AppModule {}
