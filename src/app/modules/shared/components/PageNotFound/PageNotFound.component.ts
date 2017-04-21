import { CommonUtilService } from './../../commonUtil-service/commonUtil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './PageNotFound.component.html',
  styleUrls: ['./PageNotFound.component.css']
})
export class PageNotFoundComponent {

  pageNotFoundImg = '../../../../../assets/images/imgs/pagenotfound.jpg';
  constructor(
    private commonUtilService: CommonUtilService
  ) { }
  redirectToHome(path: string):void{
    this.commonUtilService.navigateTo(path);
  }
}