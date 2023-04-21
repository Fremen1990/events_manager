import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/graphsql-schema.gql'),
    }),
    ConfigModule.forRoot(),
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
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//TODO 30:00 Theory
// https://www.youtube.com/watch?v=_PVA98-ooWA
