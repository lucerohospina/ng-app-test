import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-generate-singles',
  templateUrl: './generate-singles.component.html',
  styleUrls: ['./generate-singles.component.css']
})
export class GenerateSinglesComponent implements OnInit {
  hasValue = false;
  userName = '';
  // data que va venir del form
  name='';
  dateToday='';
  reference='';
  placeIssue='';
  quantity='';
  amount='';
  frecuency='';

  public dataGenerated = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataGenerated = this.dataService.getData();
  }

  // evento input para cada input element del form
  generateTable(event:Event) {
    // this.name = (<HTMLInputElement>event.target).value;
    this.dateToday = (<HTMLInputElement>event.target).value;
    // this.reference = (<HTMLInputElement>event.target).value;
    // this.placeIssue = (<HTMLInputElement>event.target).value;
    // this.quantity = (<HTMLInputElement>event.target).value;
    // this.amount = (<HTMLInputElement>event.target).value;
    // this.frecuency = (<HTMLInputElement>event.target).value;
    console.log(this.dateToday);
  }

  resetingInput() {
    this.userName = '';
  }

}
