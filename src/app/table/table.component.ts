import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public tableWidget: any;

  constructor() { }

  ngOnInit() {
    // document.getElementById("example").DataTable();
  }

  ngAfterViewInit() {
    this.initDatatable()
  }

  private initDatatable(): void {
    let exampleId: any = $('#example');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }
}




