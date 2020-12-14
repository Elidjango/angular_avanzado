import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// - Router
import { AppRoutingModule } from "./app-routing.module";

// - Component
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { E404Component } from './pages/e404/e404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarChatComponent } from './shared/sidebar-chat/sidebar-chat.component';
import { LayoutComponent } from './pages/layout.component';
import { RecoveryPasswordComponent } from './auth/recovery-password/recovery-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    E404Component,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SidebarChatComponent,
    LayoutComponent,
    RecoveryPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
