import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entites/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {


    constructor(
        @InjectRepository(Article)
        private readonly articlesRepo: Repository<Article>,
    ) {}

    findAll() {
        return this.articlesRepo.find();
    }

    findById(id: number) {
        return this.articlesRepo.findOneBy({ id }); 
    }
}
