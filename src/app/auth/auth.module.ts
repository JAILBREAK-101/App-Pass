import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ReactiveFormsModule } from "@angular/forms";

export const authComponents = [
    LoginComponent,
    RegisterComponent,
    // ForgotPasswordComponent,
    // ResetPasswordComponent
]

const routes: Routes = [ 
    {
        path: '',
        children: [
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
        ]
    }
]

@NgModule({
    declarations: [
        authComponents
    ],
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    exports: [
        RouterModule
    ]
})
export class AuthModule {}

