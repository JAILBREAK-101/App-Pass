import { NgModule } from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {VisitorsComponent} from "./views/pages/visitors/visitors.component";
import {NotificationsComponent} from "./views/pages/notifications/notification.component";
import {ProfileComponent} from "./views/pages/profile/profile.component";
import { NewVisitorComponent } from "./views/pages/visitors/new-visitor/new-visitor.component";
import { VisitorDetailsComponent } from "./views/pages/visitors/visitor-details/visitor-details.component";
import { EditProfileComponent } from "./views/pages/profile/edit-profile/edit-profile.component";
import { NewVisitorModal } from "./views/components/modals/new-visitor-modal.component";
import { VisitorPasscodeModal } from "./views/components/modals/visitor-passcode.modal.component";

const routes: Routes = [
  {
    path: 'visitors',
    component: VisitorsComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'new-visitor',
    component: NewVisitorComponent
  },
  {
    path: 'visitor-details/:visitor',
    component: VisitorDetailsComponent
  },
  {
    path: 'edit', component: EditProfileComponent
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
  VisitorDetailsComponent,
  NewVisitorComponent,
  EditProfileComponent,

  NewVisitorModal,
  VisitorPasscodeModal
]