import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// - Errors
import { E404Component } from './errors/e404/e404.component';

// - Module Routings
import { AuthRoutingModule } from './auth/auth.routing';
import { LayoutRoutingModule } from './pages/layout.routing';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/dashboard"},
  {path: "**", component: E404Component}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    AuthRoutingModule,
    LayoutRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
