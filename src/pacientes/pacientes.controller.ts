import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('pacientes')
export class PacientesController {
    //metodo ver pacientes
    @Get()
    async getPacientes(){
        return 'todos los pacientes';
    }

    @Get(':rut')
    async getPaciente(@Param('rut') rut:string){
        return `producto ${ rut }`;
    }

    @Post()
    async createPacientes(pacienteDto: any){
        return 'crear paciente';
    }

    @Put(':rut')
    async updatePacientes(@Param('rut') rut: string){
        return 'editar paciente';
    }

    @Delete(':rut')
    async deletePaciente(@Param('rut') rut: string){
        return rut;
    }


}
