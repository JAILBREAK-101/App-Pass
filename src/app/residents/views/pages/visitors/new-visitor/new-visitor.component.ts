import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { VisitorsService } from "../visitors.service";
import { Validate } from "src/app/residents/shared/helpers/validators";
import { TimeStamp } from "src/app/residents/shared/helpers/timestamps";
import { IdGenerator } from "src/app/residents/shared/helpers/idgenerator";
@Component({
    templateUrl: './new-visitor.component.html'
})

export class NewVisitorComponent implements OnInit {     
    newVisitorForm!: FormGroup

    generatePasscode: boolean = false;

    getId!: IdGenerator;
    
    getDateCreated!: TimeStamp

    constructor(private newVisitorFormBuilder: FormBuilder, private addNewVisitorService: VisitorsService) { }

    ngOnInit(): void {
        this.newVisitorForm = this.newVisitorFormBuilder.group({
            name: ['', Validate.nameValidator], 
            phoneNumber: ['', Validate.phoneNumberValidator],
            generatePasscode: [this.generatePasscode],
        })
    }

    toggleGeneratePasscode() {
        this.generatePasscode = !this.generatePasscode
        console.log(this.generatePasscode)
    }

    onSubmitForm() {
        // this.addNewVisitorService.addNewVisitor({firstName: this.newVisitorForm.controls['name'].value, lastName: this.newVisitorForm.controls['name'].value, phoneNumber: this.newVisitorForm.controls['phoneNumber'].value, dateAdded: this.getDateCreated.getTime().dateCreated})
    }
}