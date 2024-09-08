import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>, ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(newUser);
  }

  findAll(name?: string) {   
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updatedUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    return this.usersRepository.save({ ...user, ...updatedUserDto });
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    return this.usersRepository.remove(user);
  }
}
