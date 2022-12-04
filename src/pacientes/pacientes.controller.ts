import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('pacientes')
export class PacientesController {
//metodos para datos pacientes

    //metodo ver pacientes
    @Get()
    async getPacientes(){
        return 'datos de todos los pacientes';
    }

    @Get(':rut')
    async getPaciente(@Param('rut') rut:string){
        return `conseguir paciente por rut ${ rut }`;
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
