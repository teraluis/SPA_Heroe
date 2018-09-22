import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:any={};
  @Input() index:number;
  @Output() heroeSelecionado:EventEmitter<number>;
  constructor(private router:Router) {
    this.heroeSelecionado=new EventEmitter();

  }
  verHeroe(){
    // this.heroeSelecionado.emit(this.index);
    this.router.navigate(['/heroe',this.index]);
  }
  ngOnInit() {
  }

}
