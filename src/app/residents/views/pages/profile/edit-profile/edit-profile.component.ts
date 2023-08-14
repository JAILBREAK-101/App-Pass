import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validate } from "src/app/shared/helpers/validators";

@Component({
    templateUrl: './edit-profile.component.html'
})

export class EditProfileComponent implements OnInit {

    editProfileForm!: FormGroup

    constructor(private editProfileFormBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.editProfileForm = this.editProfileFormBuilder.group({
            name: ['', Validate.nameValidator], 
            phoneNumber: ['', Validate.phoneNumberValidator]
        })
    }

    // Routing with Page data
    @Input() routeParams = ''
}