import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getTable() {
    return this.appService.getTable('tasks');
  }
}
