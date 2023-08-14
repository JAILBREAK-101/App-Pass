import { Injectable } from "@angular/core";
import { VisitorsListInterface } from '../../../../shared/interfaces/visitors';

@Injectable({
    providedIn: "root"
})

export class VisitorsService {
    
    visitorsData: VisitorsListInterface[] = []

    addNewVisitor({firstName, lastName, dateAdded, phoneNumber}: VisitorsListInterface) {
        this.visitorsData.push({firstName, lastName, dateAdded, phoneNumber});
        console.log(this.visitorsData)
    }

    getVisitorsList() {
        return this.visitorsData;
    }

    getVisitorData() {

    }

    setVisitorData() {

    }

    generateVisitorPassCode() {}

}