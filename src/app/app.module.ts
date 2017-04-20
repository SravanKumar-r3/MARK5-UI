// Plugins here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Services here
import {MainHttpService} from './services/http-service/main-http.service';

// Components here
import { AppComponent } from './components/main/app.component';

// Modules here
import { SharedModule } from './modules/shared/shared.module';

//directives here

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule, MaterialModule.forRoot(),
    SharedModule
  ],
  providers: [
    MainHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
