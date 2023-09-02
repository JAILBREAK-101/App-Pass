import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    registerUser():  boolean {
        return false
    }

    loginUser(): boolean {
        return false
    }

    // sendPasswordResetLink(): boolean {
    //     return false
    // // }
}