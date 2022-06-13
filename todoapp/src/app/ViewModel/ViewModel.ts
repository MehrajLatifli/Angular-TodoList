import { TodoModel } from '../Model/model';

export class TodoViewModel {

  items: TodoModel[];

  constructor() {

    this.items=[

      new TodoModel(1,"Sport",false)

    ];
  }
}

