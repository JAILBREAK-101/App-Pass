import { Validators } from "@angular/forms";

class Validate {

    static nameValidator = [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(18)
    ]

    static phoneNumberValidator = [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
        Validators.pattern(/{0, 9}/g)
    ]
    
    static emailValidator = [
        Validators.pattern(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/g),
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
    ]
    
    static passwordValidator = [
        Validators.minLength(8),
        Validators.maxLength(30),
    ]
}
export {Validate};