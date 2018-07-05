import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-asado-item',
  templateUrl: './asado-item.component.html',
  styleUrls: ['./asado-item.component.scss']
})
export class AsadoItemComponent implements OnInit {
  @Input() asado;
  constructor() { }

  ngOnInit() {
  }

  removeAsado = () => {
    alert("todavia no se puede borrar wex");
  }
}
