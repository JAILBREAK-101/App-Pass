import {Component, OnInit} from "@angular/core";
import { VisitorsService } from "./visitors.service";
@Component({
  templateUrl: './visitors.component.html'
})

/* When you register a provider at the component level, you get a new instance of the service with each new instance of that component. */

export class VisitorsComponent implements OnInit {

  constructor(private visitorsService: VisitorsService) {}

  visitorList = this.visitorsService.visitorsData

  ngOnInit(): void {
    this.visitorsService.getVisitorsList()
  }
}