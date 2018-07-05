import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsadoListComponent } from './asado-list/asado-list.component';
import { AsadoAddComponent } from './asado-list/asado-add/asado-add.component';
import { AsadoItemComponent } from './asado-list/asado-item/asado-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AsadoListComponent,
    AsadoAddComponent,
    AsadoItemComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBhI2w_Ze11h4McwlE0Yq6xFi-gp7VBhVo',
      authDomain: 'asadomanager-c585a.firebaseapp.com',
      databaseURL: 'https://asadomanager-c585a.firebaseio.com',
      projectId: 'asadomanager-c585a',
      storageBucket: 'asadomanager-c585a.appspot.com',
      messagingSenderId: '1004557507773'
    }),
    AngularFirestoreModule.enablePersistence(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
