import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Employees} from '../Employees';


const httpOptions={
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
} 
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl ='http://localhost:8081/firstApp/api/v1/Employees';

  constructor(private http:HttpClient) { }
  getEmployees() : Observable<Employees[]> {

    return this.http.get<Employees[]>(this.apiUrl);
  }
  getEmployee(Id : number) : Observable<Employees> {
    const Url = `${this.apiUrl}/${Id}`;
    return this.http.get<Employees>(Url);
  }
  DeleteEmployee(Employee:Employees): Observable <Employees>{
    const Url = `${this.apiUrl}/${Employee.id}`;
    return this.http.delete<Employees>(Url);
  }
  
  UpdateEmployee(Id:number,Employee:Employees): Observable <Employees>{
    const Url = `${this.apiUrl}/${Id}`;
    
    return this.http.put<Employees>(Url,Employee,httpOptions);
  }
  AddEmployee(Employee:Employees): Observable <Employees>{
  
    return this.http.post<Employees>(this.apiUrl,Employee,httpOptions);
  }
   
}
