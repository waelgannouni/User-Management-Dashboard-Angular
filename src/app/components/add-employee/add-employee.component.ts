import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Employees } from '../../Employees';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  @Output () OnAddEmployee : EventEmitter<Employees>= new EventEmitter();

  @Input () btnToggle : boolean;

  FirstName : string;
  LastName : string;
  Email : string;


  constructor() { }

  ngOnInit() {
  }
  onAdd(){
    if(!this.FirstName){
      alert("please add your first Name");
      return;
    }
     if(!this.LastName){
      alert("please add your Last Name");
      return;
    }
     if(!this.Email){
      alert("please add your Email");
      return;
    }

    const newEmployee={
      firstName : this.FirstName,
      lastName : this.LastName,
      email : this.Email
    }
    this.OnAddEmployee.emit(newEmployee);

    this.FirstName="";
    this.LastName="";
    this.Email="";
    alert("Employee Added Successfully");
    this.btnToggle=true;
    
  }

}
