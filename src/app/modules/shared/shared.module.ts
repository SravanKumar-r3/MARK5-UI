import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule} from '@angular/router';

import { HighlightDirective } from './directives/highlight.directive';

import {PageNotFoundComponent} from './components/PageNotFound/PageNotFound.component';
import {CommonUtilService} from './commonUtil-service/commonUtil.service';
import {HttpService} from './http-service/http.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    PageNotFoundComponent
  ],
  exports:[
    HighlightDirective,
    PageNotFoundComponent
    
  ],
  providers:[
    CommonUtilService,
    HttpService
  ]
})
export class SharedModule { }