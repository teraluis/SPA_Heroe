import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Routes
import {APP_ROUTING} from './app.routes';
//Componentes

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
//servicios
import {HeroesService} from './servicios/heroes.service';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    HomeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
