import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return [
      {"id": 1, "number": "FV12345678", "amount": 15000, "due": "30/06/18"},
      {"id": 2, "number": "FV87654321", "amount": 15000, "due": "31/07/18"},
      {"id": 3, "number": "FV12365478", "amount": 15000, "due": "31/08/18"},
      {"id": 4, "number": "FV87456123", "amount": 15000, "due": "30/09/18"},
      {"id": 5, "number": "FV45632178", "amount": 15000, "due": "31/10/18"},
      {"id": 6, "number": "FV65478912", "amount": 15000, "due": "30/11/18"},
      {"id": 7, "number": "FV32198765", "amount": 15000, "due": "31/12/18"},
      {"id": 8, "number": "FV25874139", "amount": 15000, "due": "31/01/19"},
      {"id": 9, "number": "FV36974125", "amount": 15000, "due": "28/02/19"},
      {"id": 10, "number": "FV57391468", "amount": 15000, "due": "31/03/19"}
    ];
  }
}
