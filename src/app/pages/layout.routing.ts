import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// - Components
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
