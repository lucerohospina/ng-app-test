import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployees() {
    return [
      {"id": 1, "name": "Mariela", "age": 30},
      {"id": 2, "name": "Daniela", "age": 25},
      {"id": 3, "name": "Melissa", "age": 26},
      {"id": 4, "name": "Jenny", "age": 28}
    ];
  }
}
