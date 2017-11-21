import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Secretary } from '../models/secretary';
import { SecretaryService } from '../services/secretary.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    //constructor() { }

    ///////////////////////

    model = new Secretary();
    secretaries: Secretary[] = new Secretary()[9];
    success: boolean;

    submitted = false;

    onSubmit() { this.submitted = true; }

    newUser() {
        this.model = new Secretary();
    }

    complexForm: FormGroup;

    constructor(private secretaryService: SecretaryService, fb: FormBuilder) {
        this.complexForm = fb.group({
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])]
        });
    }

    //Subscribe:
    //First callback: initialisation
    //Second callback: error,
    //Third callback: Action after response
    ngOnInit() {
        this.secretaryService.getAll().subscribe(
            (secretaries) => { this.secretaries = secretaries._embedded.secretary; },
            (error) => console.log(error),
            () => this.setSuccess());
    }

    setSuccess() {
        this.success = true;
    }

    connection(value: any) {
        if (this.success) {
            for (let secretary of this.secretaries) {
                console.log(secretary);
                if (value.email == secretary.email && value.password == secretary.password) {
                    console.log("hourra");
                    return true;
                }
            }
        }
        return false;
    }

    // Reveal in html:
    //   Email via form.controls = {{showFormControls(UserForm)}}
    showFormControls(form: any) {
        return form && form.controls['email'] &&
            form.controls['email'].value;
    }
}
