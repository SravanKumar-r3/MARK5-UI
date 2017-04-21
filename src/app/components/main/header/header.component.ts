import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoImg = '../../../../assets/images/icons/logo.png';

  constructor() { }

  ngOnInit() {
  }
}
