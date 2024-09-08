import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiBadGatewayResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOkResponse({ type: User, isArray: true, description: 'find users' })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  findAll(@Query('name') name: string) {
    return this.usersService.findAll(name);
  }

  @ApiOkResponse({ type: User, description: 'find user' })
  @ApiNotFoundResponse()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id : number) {

    const user = this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @ApiOkResponse({ type: User, description: 'updating user' })
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOkResponse({ type: User, description: 'deleting user' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id:number) {
    return this.usersService.remove(id);
  }
}
