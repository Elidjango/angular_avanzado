import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// - Router
import { AppRoutingModule } from "./app-routing.module";

// - E404 / E500
import { E404Component } from './errors/e404/e404.component';

// - M_authenticated
import { AuthModule } from "./auth/auth.module";
import { LayoutModule } from "./pages/layout.module";

@NgModule({
  declarations: [
    AppComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    AuthModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
