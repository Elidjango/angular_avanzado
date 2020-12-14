import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// - Authentication
import { LoginComponent } from './auth/login/login.component';
import { RecoveryPasswordComponent } from './auth/recovery-password/recovery-password.component';
import { RegisterComponent } from './auth/register/register.component';

// - Router First
import { LayoutComponent } from './pages/layout.component';
import { E404Component } from './pages/e404/e404.component';

// - Router Children
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {path: "", pathMatch: "full", redirectTo: "/dashboard"}
    ]
  },
  {
    path: "signin",
    component: LoginComponent
  },
  {
    path: "signup",
    component: RegisterComponent
  },
  {
    path: "recovery-password",
    component: RecoveryPasswordComponent
  },
  {
    path: "**",
    component: E404Component
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
