// Plugins here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Services here

// Components here
import { AppComponent } from './components/main/app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { PageNotFoundComponent } from './modules/shared/components/PageNotFound/PageNotFound.component';
import { MainLayoutComponent } from './components/main/main-layout/main-layout.component';

// Modules here
import { SharedModule } from './modules/shared/shared.module';
import { FooterComponent } from './components/main/footer/footer.component';

// Routing paths here
const appRoutes: Routes = [
  { path: '', component: MainLayoutComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // NgbModule.forRoot(),
    // BrowserAnimationsModule, MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
