import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../Model/model';
import { DataServiceService } from '../Service/data-service.service';
import { TodoViewModel } from '../ViewModel/ViewModel';

@Component({
  selector: 'app-componentname2',
  templateUrl: './componentname2.component.html',
  styleUrls: ['./componentname2.component.css']
})
export class Componentname2Component implements OnInit {

  constructor(private service:DataServiceService) {

    service.items=this.todoviewmodel.items;

    this.id=1;
  }

  ngOnInit(): void {
  }
  private todoviewmodel = new TodoViewModel();

  id:any;
  additem(inputvalue: any) {

    if(inputvalue!="")
    {


      this.id++;

    this.todoviewmodel.items.push(new TodoModel(this.id,inputvalue,false));


    this.todoviewmodel.items.forEach(element => {

      console.log(element.Description);

    });

    }
    else{
      alert("Please input info");
    }

  }

}



