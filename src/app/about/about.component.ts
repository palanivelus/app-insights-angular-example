import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../log/baseComponent';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends  BaseComponent implements OnInit {
  constructor() {
    super();
   
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    
  }
}
