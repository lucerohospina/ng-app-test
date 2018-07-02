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
  public dataGenerated = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataGenerated = this.dataService.getData();
  }

  resetingInput() {
    this.userName = '';
  }

}
