import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  param: any;
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(param =>{
      console.log(param['id']);
    });
  }

  ngOnInit() {
  }

}
