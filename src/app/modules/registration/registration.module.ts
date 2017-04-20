import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services here
import { LoginRegisterComponent } from './login-register/login-register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginRegisterComponent
  ],
  providers: []
})
export class RegistrationModule { }