import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employees = this.employeesService.getEmployees();  
  }

}
