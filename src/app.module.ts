import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),
  ConfigModule.forRoot(), NinjasModule, UsersModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
