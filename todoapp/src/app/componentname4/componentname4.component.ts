import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../Service/data-service.service';
import { TodoViewModel } from '../ViewModel/ViewModel';

@Component({
  selector: 'app-componentname4',
  templateUrl: './componentname4.component.html',
  styleUrls: ['./componentname4.component.css']
})
export class Componentname4Component implements OnInit {

  constructor(private service: DataServiceService) {

    this.todoviewmodel.items = service.items;

    setInterval(()=>{
    this.displayAllfromComponent3=service.servicesdisplayall;
    this.GetSpecialClasses();
    },100);




}

  ngOnInit(): void {
  }

  private todoviewmodel = new TodoViewModel();

  displayAllfromComponent3:boolean=false;

  getTableitems() {


    if(this.displayAllfromComponent3==false)
    {
      return this.todoviewmodel.items.filter(item=>item.Action==true);

    }
    else{
      return this.todoviewmodel.items;
    }

  }

  getTableitems2() {




}

   inputvalue:any;
  changeTableRow(tbody: any, tr: any) {
    for (let i = 0; i < tbody.children.length; i++) {

      tbody.children[i].style.background = 'orange';
    }

    tr.style.background = 'green';




    const input = document.getElementById('DescriptionId') as HTMLInputElement | null;




    input.value = tr.childNodes[1].innerText;

    this.inputvalue=tr.childNodes[0].innerText;


    //document.body.getElementsByTagName("td")[1].textContent


    // for (var i = 0; i < tr.childNodes.length; i++) {

    //   if (tr.childNodes[i].tagName == 'TD') {
    //     input.value = tr.childNodes[1].innerText;
    //   }
    // }



  }



  updateitem(UpdateDescription: any, UpdateAction: any) {

    const input = document.getElementById('DescriptionId') as HTMLInputElement | null;
    this.todoviewmodel.items.forEach((value, index) => {


      if (this.inputvalue == value.Id) {
        this.todoviewmodel.items[index].Description = UpdateDescription;
        this.todoviewmodel.items[index].Action = UpdateAction;


      input.value="";
      }

    });
  }

  GetSpecialClasses() {

    const input = document.getElementById('DescriptionId') as HTMLInputElement | null;
    const input2 = document.getElementById('inputbtn') as HTMLInputElement | null;


    if(input.value=="")
    {
      input2.disabled=true;
    }
    else{
      input2.disabled=false;
    }


  }


}
