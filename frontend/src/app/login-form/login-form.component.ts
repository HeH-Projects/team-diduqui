import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Secretary } from '../models/secretary';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    //constructor() { }

    ngOnInit() {}

    ///////////////////////

    model = new Secretary();

    submitted = false;

    onSubmit() { this.submitted = true; }

    newUser() {
        this.model = new Secretary();
    }

    complexForm : FormGroup;

    constructor(fb: FormBuilder){
        this.complexForm = fb.group({
            'email' : [null, Validators.compose([Validators.required, Validators.email])],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])]
        })
    };

    // Reveal in html:
    //   Email via form.controls = {{showFormControls(UserForm)}}
    showFormControls(form: any) {
        return form && form.controls['email'] &&
        form.controls['email'].value;
    }

}
