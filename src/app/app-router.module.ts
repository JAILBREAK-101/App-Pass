import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./residents/views/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/residents/visitors',
    pathMatch: "full"
  },
  {
    path: 'residents',
    loadChildren: () => import('./residents/residents.module').then(module => module.ResidentsModule),
    // outlet: 'residents'
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
