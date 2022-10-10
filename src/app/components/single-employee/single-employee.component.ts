import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Employees } from '../../Employees';
@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.scss']
})
export class SingleEmployeeComponent implements OnInit {

 
  @Input () employee : Employees;

  @Output () onDeleteEmployee: EventEmitter <Employees> = new EventEmitter ();


  toggle: boolean= true ;

  
  FirstName : string;
  LastName : string;
  Email : string;
  constructor() { }

  ngOnInit() {
  this.FirstName=this.employee.firstName;
  }
  toggleEdit(){
    this.toggle=!this.toggle;
  }
  onDelete(Employee){
    this.onDeleteEmployee.emit(Employee);
  }
}
