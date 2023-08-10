import {NgModule} from "@angular/core";

/* A Module is standalone by default */
import {NgFor, NgOptimizedImage} from "@angular/common";
import {residentComponents, ResidentRouter} from "./residents-router.module";

@NgModule({
  declarations: [
    residentComponents,
  ],
  imports: [
    ResidentRouter,
    NgFor,
    NgOptimizedImage
  ],
})

export class ResidentsModule { }
