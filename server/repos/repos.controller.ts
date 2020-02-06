import { Controller, ParseIntPipe, Get, Param, Render } from '@nestjs/common';
import { ReposService } from './repos.service';

@Controller('repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Get()
  @Render('repos')
  getRepos() {
    return {
      title: 'haha',
    };
  }

  @Get('/:id')
  @Render('versions')
  getRepoById(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
