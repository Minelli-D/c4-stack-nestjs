import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { <%= entityName %> } from '../entities/<%= nameFile %>.entity';

@Injectable()
export class <%= name %>Service extends TypeOrmCrudService<<%= entityName %>> {
  constructor(@InjectRepository(<%= entityName %>) repo) {
    super(repo);
  }
}
