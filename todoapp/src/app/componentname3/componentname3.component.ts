import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../Service/data-service.service';
import { TodoViewModel } from '../ViewModel/ViewModel';

@Component({
  selector: 'app-componentname3',
  templateUrl: './componentname3.component.html',
  styleUrls: ['./componentname3.component.css']
})
export class Componentname3Component implements OnInit {

  constructor(public service: DataServiceService) {

    this.todoviewmodel.items = service.items;

    this.count = 0;

    setInterval(()=>{
      service.servicesdisplayall=this.displayAll;
    },100)

  }


  private todoviewmodel = new TodoViewModel();

  ngOnInit(): void {
  }

  displayAll: boolean = true;

  count: any;





  display() {


        this.count++;


        const nodeList = document.querySelectorAll<HTMLElement>("#labelcheck");



    if (this.count % 2 == 0) {
      this.displayAll = true;

             for (let index = 0; index < nodeList.length; index++) {


               nodeList[index].innerText="Show All";


              }


      // alert(  this.displayAll);
    }

    else{
      this.displayAll = false;

      for (let index = 0; index < nodeList.length; index++) {


        nodeList[index].innerText="Yes";


       }

      // alert(  this.displayAll);
    }

    // this.count++;


    // if (this.count % 2 == 0) {

    //   this.displayAll = false;

    //     this.todoviewmodel.items.filter(item => item.Action ==  this.displayAll).forEach(element => {



    //       const nodeList = document.querySelectorAll<HTMLElement>("#trid");

    //       for (let index = 0; index < nodeList.length; index++) {


    //        nodeList[index].style.visibility="hidden";


    //       }

    //     });



    // }

    // if (this.count % 2 != 0) {

    //   this.displayAll = true;


    //       this.todoviewmodel.items.filter(item => item.Action ==  this.displayAll).forEach(element => {



    //         const nodeList = document.querySelectorAll<HTMLElement>("#trid");

    //         for (let index = 0; index < nodeList.length; index++) {


    //          nodeList[index].style.visibility="visible";


    //         }


    //       });

    // }

  }


}
