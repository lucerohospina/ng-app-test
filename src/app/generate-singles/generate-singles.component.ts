import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormData }    from '../form-data';
@Component({
  selector: 'app-generate-singles',
  templateUrl: './generate-singles.component.html',
  styleUrls: ['./generate-singles.component.css']
})
export class GenerateSinglesComponent implements OnInit {
  hasValue = false;
  userName = '';
  public dataGenerated = [];

  // data que va venir del form
  places = ["Seleccione lugar", "Miraflores", "San Isidro", "Magdalena"];
  frecuency = ["Selecciones frecuencia", "15 días", "30 días", "45 días", "60 días"];
  public model = new FormData("", "", "", this.places[0], 0, 0, this.frecuency[0]);
  public singleAmount:any;

  submitted = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataGenerated = this.dataService.getData();
  }

  // evento input para cada input element del form
  onSubmit() {
    this.singleAmount = this.model.amount / this.model.quantity;
    this.submitted = true;
  }

  // desaparece el form generado 
  onReset() {
    this.submitted = false;
  }

  // discard this later
  get diagnostic() { 
    return JSON.stringify(this.model); 
  }

  resetingInput() {
    this.userName = '';
  }
}
