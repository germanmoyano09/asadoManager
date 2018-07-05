import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-asado-list',
  templateUrl: './asado-list.component.html',
  styleUrls: ['./asado-list.component.scss']
})
export class AsadoListComponent implements OnInit {
  asado = [];
  constructor(private _store: AngularFirestore) { }

  ngOnInit() {
    this._store.collection('asados')
      .valueChanges()
      .subscribe(asados => this.asado = asados);
  }
}
