import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ProjectsController],
  providers: [AppService],
  imports: [DatabaseModule],
})
export class ProjectsModule {}
