import {Component, OnInit} from "@angular/core";
import { VisitorsService } from "./visitors.service";
@Component({
  templateUrl: './visitors.component.html'
})
export class VisitorsComponent implements OnInit {

  constructor(private visitorsService: VisitorsService) {}

  visitorList = this.visitorsService.visitorsData

  ngOnInit(): void {
    this.visitorsService.getVisitorsList()
  }
}