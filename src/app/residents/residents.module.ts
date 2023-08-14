import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
/* A Module is standalone by default */
import {NgFor, NgIf, NgOptimizedImage} from "@angular/common";
import {residentComponents, ResidentRouter} from "./residents-router.module";
import { VisitorsService } from "./views/pages/visitors/visitors.service";

@NgModule({
  declarations: [
    residentComponents,
  ],
  providers: [
    VisitorsService
  ],
  imports: [
    ReactiveFormsModule,
    ResidentRouter,
    NgFor,
    NgOptimizedImage,
    NgIf
  ],
  exports: [
    ReactiveFormsModule
  ]
})

export class ResidentsModule { }
