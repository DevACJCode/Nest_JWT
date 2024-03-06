import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPosts(): Promise<{ id: number; title: string }> {
    return new Promise((resolve) => resolve({ id: 1, title: 'Meu Post' }));
  }
}
