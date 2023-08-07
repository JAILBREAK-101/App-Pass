import {Component, Input} from "@angular/core";
import {VisitorsListInterface} from "../../../../shared/interfaces/visitors";
@Component({
  templateUrl: './visitors.component.html'
})
export class VisitorsComponent   {

  visitorsData: VisitorsListInterface[] = [
    {
      id: 0,
      firstName: 'Adam',
      lastName: 'Dudley',
      phoneNumber: 12544444823,
      dateAdded: 'Tuesday 6th May, 2021',
      image: ''
    },
    {
      id: 1,
      firstName: 'Korede',
      lastName: 'Graham',
      phoneNumber: 23583843623,
      dateAdded: 'Thursday 7th April, 2021',
      image: ''
    },
    {
      id: 2,
      firstName: 'Opemipo',
      lastName: 'Bolaji',
      phoneNumber: 98302812132,
      dateAdded: 'Sunday 13th September, 2022',
      image: ''
    },
  ]
}
