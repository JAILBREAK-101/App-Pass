import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./residents/views/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: "full"
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule),
    // outlet: 'auth'
  },
  {
    path: 'residents',
    loadChildren: () => import('./residents/residents.module').then(module => module.ResidentsModule),
    // outlet: 'residents'
  },
  {
    path: 'auth',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouter { }
