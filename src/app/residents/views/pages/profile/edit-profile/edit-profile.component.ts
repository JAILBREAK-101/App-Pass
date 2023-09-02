import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Validate } from "src/app/residents/shared/helpers/validators";
import { ProfileService } from "../profile.service";

@Component({
    templateUrl: './edit-profile.component.html'
})

export class EditProfileComponent implements OnInit {

    editProfileForm!: FormGroup

    constructor(private editProfileFormBuilder: FormBuilder, private editProfileService: ProfileService) { }

    ngOnInit(): void {
        this.editProfileForm = this.editProfileFormBuilder.group({
            name: ['', Validate.nameValidator], 
            phoneNumber: ['', Validate.phoneNumberValidator]
        })
    }

    updateProfile() {
        this.editProfileService.updateResidentProfileData()
    }
}