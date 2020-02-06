import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReposController } from './repos/repos.controller';
import { ReposService } from './repos/repos.service';
import { ReposModule } from './repos/repos.module';

@Module({
  imports: [RenderModule, ReposModule],
  controllers: [AppController, ReposController],
  providers: [AppService, ReposService],
})
export class AppModule {}
