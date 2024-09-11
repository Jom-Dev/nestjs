import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { EmployeesModule } from './employees/employees.module';
import { Employee } from './employees/entities/employee.entity';
import { Task } from './employees/entities/task.entity';
import { ContactInfo } from './employees/entities/contact-info.entity';
import { Meeting } from './employees/entities/meeting.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions), 
    TypeOrmModule.forFeature([Employee, ContactInfo, Task, Meeting]),
    ConfigModule.forRoot(), NinjasModule, UsersModule, TodosModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
