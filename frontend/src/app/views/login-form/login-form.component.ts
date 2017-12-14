import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Secretary } from '../../models/secretary';
import { Http, Response } from '@angular/http';
import { TokenService } from '../../services/token.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    // constructor() { }

    ///////////////////////

    complexForm: FormGroup;
    model = new Secretary();
    secretaries: Secretary[] = new Secretary()[9];
    success: boolean;

    submitted = false;

    onSubmit() { this.submitted = true; }

    newUser() {
        this.model = new Secretary();
    }

    constructor(fb: FormBuilder, private router: Router, private http: Http, private token: TokenService) {
        this.complexForm = fb.group({
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])]
        });
    }

    ngOnInit() {

    }

    setSuccess() {
        this.success = true;
    }

    connection(value: any) {
        this.token.generate(value.email, value.password, function(token) {
            if (token === 'error') {
                console.log('it works pas!');
            } else {
                console.log(token);
                this.router.navigate(['/appointments']);
            }
        }.bind(this));
    }

    showFormControls(form: any) {
        return form && form.controls['email'] &&
            form.controls['email'].value;
    }
}
