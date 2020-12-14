import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// - Components
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: "dashboard",
        component: LayoutComponent,
        children: [
            {path: "", component: DashboardComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
