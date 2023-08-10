import { NgOptimizedImage } from "@angular/common";
import {Component} from "@angular/core"
import { RouterModule } from "@angular/router";

@Component({
  selector: "nav-bar",
  templateUrl: './navigation.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterModule
  ]
})

export default class NavigationBar {
}
