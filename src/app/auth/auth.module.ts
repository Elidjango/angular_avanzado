import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// - Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoveryPasswordComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    RecoveryPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
