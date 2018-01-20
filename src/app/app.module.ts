import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AgmCoreModule } from '@agm/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MapasService} from "./services/mapas.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDUhvnF2oyk73R1PipaJWxEgcgpy5T6k54'
    })
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
