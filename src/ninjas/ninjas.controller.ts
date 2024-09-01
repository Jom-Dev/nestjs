import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    // injecting service class (injec) to the controller via constructor
    // instead of instantiating repeatedly all over each routes (ex. service -1)
    constructor(private readonly ninjasService: NinjasService) {}

    @Get()
    getNinjas(@Query('weapon') weapon: string) {
        // ex. service-1
        // const service = new NinjasService();
        // return service.getNinjas(weapon);

        return this.ninjasService.getNinjas(weapon);
    }

    @Get(':id')
    getNinja(@Param('id') id: string) {
        return { id  };
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return {
            name: createNinjaDto.name
        };
    }

    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        return { 
            id,
            name: updateNinjaDto.name
        };
    }

    @Delete(':id')
    removeNinja(@Param('id') id: string){
        return { id };
    }
}
