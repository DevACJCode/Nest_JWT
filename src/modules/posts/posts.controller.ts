import { Controller, Get, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from 'src/guards/auth.guards';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @UseGuards(AuthGuard)
  @Get()
  async getPosts() {
    return await this.postsService.getPosts();
  }
}
