import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employees } from 'src/app/Employees';
import {EmployeesService} from '../../services/employees.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  @Input () employee : Employees;

  Employee:Employees;

  Id : number;
  constructor(private employeeservice : EmployeesService) { }

  ngOnInit() {
    this.Id=this.employee.id;
    this.Employee=new Employees();
    this.employeeservice
      .getEmployee(this.Id)
      .subscribe((data)=>{
        this.Employee=data;
        console.log(data);
      },
      error=>console.log(error)
      );
  }
  onUpdate(){
    this.employeeservice
      .UpdateEmployee(this.Id,this.Employee)
      .subscribe(data=>{
        console.log(data);
        this.Employee=data;
      },
      error=>console.log(error)
      );
      window.location.reload();
  }

}
