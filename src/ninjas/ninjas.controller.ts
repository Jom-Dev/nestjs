import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ninjas')
@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) {}

    @Get()
    getNinjas(@Query('weapon') weapon: 'stars | nunchucks') {
        return this.ninjasService.getNinjas(weapon);
    }

    @Get(':id')
    getNinja(@Param('id', ParseIntPipe) id: number) {
      try {
        return this.ninjasService.getNinja(id);
      } catch (error) {
        // if (error instanceof DbException)
        throw new NotFoundException();
      }
    }

    @Post()
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
        return this.ninjasService.createNinja(createNinjaDto);
    }

    @Put(':id')
    updateNinja(@Param('id', ParseIntPipe) id: number, @Body() updateNinjaDto: UpdateNinjaDto) {
        return this.ninjasService.updateNinja(id, updateNinjaDto);
    }

    @Delete(':id')
    removeNinja(@Param('id', ParseIntPipe) id: number){
        return this.ninjasService.removeNinja(id);
    }
}
