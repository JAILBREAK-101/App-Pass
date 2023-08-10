import { NgModule } from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {VisitorsComponent} from "./views/pages/visitors/visitors.component";
import {NotificationsComponent} from "./views/pages/notifications/notification.component";
import {ProfileComponent} from "./views/pages/profile/profile.component";

const routes: Routes = [
  {
    path: 'visitors',
    component: VisitorsComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
]

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ResidentRouter {}

export const residentComponents = [
  VisitorsComponent,
  NotificationsComponent,
  ProfileComponent,
]
