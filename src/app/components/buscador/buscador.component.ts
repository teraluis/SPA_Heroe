import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes:any[]=[];
  termino:string;
  @Input() index:number;
  @Input() heroe:any={};
  constructor(private ActivatedRoute:ActivatedRoute,private _heroesService:HeroesService,private router:Router) {
  }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe( params=>{
      this.termino=params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }
  verHeroe(){
    console.log(this.index);
    this.router.navigate(['/heroe',this.index]);
  }
}
