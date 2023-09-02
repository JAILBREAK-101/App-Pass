import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    template: `
        <div class='modal'>
            <button (click)="null" class="button text-primary align-self-end">Dismiss</button>

            <div class="modal-card">
                <img ng="assets/images/svg/Successful.svg" alt="successfully-added-image" width="auto" height="auto" class='modal-card-image'>

                <p class='modal-card-text'>You have successfully added a new visitor</p> 
            </div>
        </div>
    `,
    selector: 'new-visitor-modal',
})

export class NewVisitorModal { 
    
    // events and emitters
    @Output() openModal: EventEmitter<any> = new EventEmitter();
    @Output() closeModal: EventEmitter<any> = new EventEmitter();
}