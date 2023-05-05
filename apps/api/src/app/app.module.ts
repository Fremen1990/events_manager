import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';
import { EventModule } from '../event/event.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    UserModule,
    EventModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/graphsql-schema.gql'),
    }),
    // ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // add ConfigModule to work with env variables
      // type: process.env.DB_TYPE as any,
      // host: process.env.HOST,
      // port: process.env.DB_PORT as any,
      // username: process.env.USERNAME,
      // password: process.env.PASSWORD,
      // database: process.env.DB_NAME,
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'AiFuture2023!',
      database: 'events_manager_db',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//  Pool region: us-east-1
//  User Pool ID: us-east-1_7GroOpVMM

// APP CLIENT AWS Cognito
// Client ID: 4g56f6kkicvfu599hkifv2bm6o
// Client name: App client name
// username: nairobi
// password: secret
