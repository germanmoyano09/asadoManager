import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface Asado {
  name: String;
  price: number;
  guests?: any[];
  recipes?: any[];
}

@Component({
  selector: 'app-asado-add',
  templateUrl: './asado-add.component.html',
  styleUrls: ['./asado-add.component.scss']
})
export class AsadoAddComponent implements OnInit {

  asado: Asado = { name: '', price: null};

  constructor(
    private _store: AngularFirestore,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {}

  addAsado = (form: NgForm) => {
    this._store.collection('asados').add(this.asado)
      .then(() => {
        form.reset();
        this._router.navigate(['/asado-list']);
      })
      .catch(err => console.log(err));
  }
}
