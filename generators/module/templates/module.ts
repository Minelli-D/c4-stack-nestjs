import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormConfig';
{ <%= importvar %> }
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRoot(ormConfig),
    TypeOrmModule.forFeature(
      [<%= importentity %>]
    )
  ],
  controllers: [<%= importcontroller %>],
  providers: [<%= importservice %>],
})
export class AppModule {}
