import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // employees: Employee[] = [];

  // constructor(private employeeService: EmployeeService, private router: Router ){}
  // ngOnInit(): void {
  //   this.getEmployees();
  // }

  // private getEmployees() {
  //   this.employeeService.getEmployeesList().subscribe(data => {
  //     this.employees = data;
  //   });
  // }

  employees!: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService, private router: Router){}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService['getEmployeesList']();
  }

  deleteEmployee(id: number) {
    this.employeeService['deleteEmployee'](id)
    .subscribe(
      (      data: any) => {
        console.log(data);
        this.reloadData();
      },
      (      error: any) => console.log(error)
      );
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
