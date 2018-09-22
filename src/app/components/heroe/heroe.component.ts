import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe:any = {};
  aparicion:Date;
  casaImg:string="assets/img/dc.png";
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(param =>{
      this.heroe = this._heroesService.getHeroe(param['id']);
      console.log(this.heroe);
    });
    this.aparicion=new Date(this.heroe.aparicion);
    if(this.heroe.casa==="DC"){
      this.casaImg="assets/img/dc.png";
    }else{
      this.casaImg="assets/img/marvel.png";
    }
  }
  ngOnInit() {
  }

}
