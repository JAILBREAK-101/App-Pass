import {NgModule} from "@angular/core";
import {NgFor} from "@angular/common";
import {residentComponents, ResidentRouter} from "./residents-router.module";

@NgModule({
  declarations: [
    residentComponents
  ],
  imports: [
    ResidentRouter,
    NgFor
  ],
})

export class ResidentsModule { }
