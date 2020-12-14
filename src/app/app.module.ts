import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// - Router
import { AppRoutingModule } from "./app-routing.module";

// - E404 / E500
import { E404Component } from './pages/e404/e404.component';

// - C_Auth
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecoveryPasswordComponent } from './auth/recovery-password/recovery-password.component';

// - M_authenticated
import { LayoutModule } from "./pages/layout.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryPasswordComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
