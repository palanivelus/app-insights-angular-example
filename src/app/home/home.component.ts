import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../log/baseComponent';


@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends  BaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
  
  }
}
