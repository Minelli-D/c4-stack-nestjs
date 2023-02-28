import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@rewiko/crud';
import { <%= entityName %> } from '../entities/<%= nameFile %>.entity';
import { <%= name %>Service } from '../services/<%= nameFile %>.service';
@Crud({
  model: {
    type: <%= entityName %>,
  },
  params: {
    <%= entityId %>: {
      field: "<%= entityId %>",
      type: "number",
      primary: true,
    },
  },
  routes: {
    only: ["getOneBase", "updateOneBase","deleteOneBase","createOneBase"],
  }
})

@ApiTags('<%= name %>')
@Controller('<%= name %>')
export class <%= name %>Controller {
  constructor(public readonly service: <%= name %>Service ) {}
  get base(): CrudController<<%= entityName %>> {
    return this;
  }
}
