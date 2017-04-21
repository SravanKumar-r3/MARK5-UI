import { Component, OnInit } from '@angular/core';
import { CommonUtilService } from '../../../modules/shared/commonUtil-service/commonUtil.service';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private sharedService: CommonUtilService) {
  }
  ngOnInit() {
  }
}