import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthConfiguration } from './auth.configuration';
import { JwtStrategy } from './jwt.strategy';
import { CognitoAuthGuard } from './cognito.guard';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [AuthConfiguration, JwtStrategy, CognitoAuthGuard],
})
export class AuthModule {}
