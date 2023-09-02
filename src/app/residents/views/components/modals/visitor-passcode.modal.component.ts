import { Component } from "@angular/core";

@Component({
    template: `
        <div class="modal">
            <section class="">
                <p class="modal-body title">Visitor's Passcode</p>
                <a class="link">Dismiss</a>
            </section>
            <div class="qr-code-box">

            </div>
            <button class="button--primary">Download Image</button>
            <div class="button-group">
                <button class="button button--primary button--outline has--icon">Copy code <img ngSrc="assets/images/svg/copy-code.svg" width="30px" height="30px" style="width: auto; height: auto" alt="Copy Code Icon"></button>
                <button class="button button--primary button--outline has--icon">Share <img ngSrc="assets/images/svg/share.svg" width="30px" height="30px" style="width: auto; height: auto" alt="Share Icon" /></button>
            </div>
        </div>
    `,
    selector: 'visitor-passcode-modal'
})
export class VisitorPasscodeModal {}