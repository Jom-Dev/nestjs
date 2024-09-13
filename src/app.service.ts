import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employees/entities/employee.entity';
import { Repository } from 'typeorm';
import { ContactInfo } from './employees/entities/contact-info.entity';
import { Task } from './employees/entities/task.entity';
import { Meeting } from './employees/entities/meeting.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(ContactInfo) private contactInfoRepo: Repository<ContactInfo>,
    @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
  ) { }

  async seed() {
    // CEO
    const ceo = this.employeeRepo.create({ name: 'Mr CEO' });
    await this.employeeRepo.save(ceo);

    const ceoContactInfo = this.contactInfoRepo.create({ email: 'test@test.com' });
    ceoContactInfo.employee = ceo;
    await this.contactInfoRepo.save(ceoContactInfo);
    //------------------------------------------------

    // MANAGER
    const manager = this.employeeRepo.create({ name: 'Igris'})
    manager.manager = ceo;
    await this.employeeRepo.save(manager);

    // REGULAR EMPLOYEES
    const regular_employee1 = this.employeeRepo.create({ name: 'Newbie1'})
    regular_employee1.manager = manager;
    await this.employeeRepo.save(regular_employee1);

    const regular_employee2 = this.employeeRepo.create({ name: 'Newbie2'})
    regular_employee2.manager = manager;
    await this.employeeRepo.save(regular_employee2);

    const orientation = this.meetingRepo.create({ zoomUrl: 'orientation.com' });
    orientation.attendees = [regular_employee1, regular_employee2];
    await this.meetingRepo.save(orientation);
    //------------------------------------------------

    const task1 = this.taskRepo.create({ name: 'Hire People' });
    await this.taskRepo.save(task1);
    const task2 = this.taskRepo.create({ name: 'Present to CEO' });
    await this.taskRepo.save(task2);

    manager.tasks = [task1, task2];

    const meeting = this.meetingRepo.create({ zoomUrl: 'meeting.com' });
    meeting.attendees = [ceo];
    await this.meetingRepo.save(meeting);

    manager.meetings = [meeting];
    await this.employeeRepo.save(manager);
    //------------------------------------------------
  }

  async getEmployeeById(id: number) {
    const employee = await this.employeeRepo.findOne({
      where: {
        id: id,
      },
      relations: {
        manager: true,
        directReports: true,
        tasks: true,
        contactInfo: true,
        meetings: true,
      },
    });

    return employee;
  }

  deleteEmployee(id: number) {
    return this.employeeRepo.delete(id);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
