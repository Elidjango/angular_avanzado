import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// - Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';

const routes: Routes = [
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
