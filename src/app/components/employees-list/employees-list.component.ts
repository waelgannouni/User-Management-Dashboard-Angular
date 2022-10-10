import { Component, OnInit, Input } from '@angular/core';
import {EmployeesService} from '../../services/employees.service';
import {Employees} from '../../Employees';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: Employees[]= [];
  @Input () btnToggle : boolean;
  constructor(private employeesService:EmployeesService) { }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(
        (employees)=>this.employees=employees
        );
  }
  DeleteEmployee(Employee: Employees){
    this.employeesService
        .DeleteEmployee(Employee)
        .subscribe(
          ()=>(
            this.employees=this.employees.filter(emp=>emp.id !== Employee.id)
            ));
          /*.subscribe = freact .then*/
  }
  AddEmployee(Employee: Employees){
    this.employeesService
      .AddEmployee(Employee)
      .subscribe(
        (Employee)=>
        this.employees.push(Employee)
        );
  } 
}
