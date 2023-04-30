import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from '../event/event.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), EventModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}
