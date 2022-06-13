import { Injectable } from '@angular/core';
import { TodoModel } from '../Model/model';
import { TodoViewModel } from '../ViewModel/ViewModel';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private todoviewmodel = new TodoViewModel();

servicesdisplayall:boolean=false;

  items:any;

}
