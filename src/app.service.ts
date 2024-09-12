import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employees/entities/employee.entity';
import { Repository } from 'typeorm';
import { ContactInfo } from './employees/entities/contact-info.entity';
import { Task } from './employees/entities/task.entity';
import { Meeting } from './employees/entities/meeting.entity';

@Injectable()
export class AppService {
  constructor (
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(ContactInfo) private contactInfoRepo: Repository<ContactInfo>,
    @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
   ) {}

   async seed() {
    const ceo = this.employeeRepo.create({ name: 'Mr CEO' });
    await this.employeeRepo.save(ceo);

    const ceoContactInfo = this.contactInfoRepo.create({ email: 'test@test.com' });
    ceoContactInfo.employee = ceo;
    await this.contactInfoRepo.save(ceoContactInfo);
   }

  getHello(): string {
    return 'Hello World!';
  }
}
