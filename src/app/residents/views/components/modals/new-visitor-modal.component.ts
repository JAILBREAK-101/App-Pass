import { Component } from "@angular/core";

@Component({
    template: `
        <div class='modal'>
            <button (click)="null" class="button text-primary align-self-end">Dismiss</button>

            <div class="modal-card">
                <img ng="assets/images/svg/Successful.svg" alt="successfully-added-image" width="50" height="50" class='modal-card-image'>

                <p class='modal-card-text'>You have successfully added a new visitor</p>

                <button routerLink='' class="button button--primary--outline">Go to Profile</button>
            </div>
        </div>
    `,
    selector: 'new-visitor-modal',
})

export class NewVisitorModal { }