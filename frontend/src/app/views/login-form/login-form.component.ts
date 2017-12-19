import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Secretary } from '../../models/secretary';
import { Http, Response } from '@angular/http';
import { SecretaryService } from '../../services/secretary.service';
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
    success: boolean;
    secretary: Secretary = new Secretary();

    submitted = false;

    onSubmit() { this.submitted = true; }

    constructor(private secretaryService: SecretaryService, fb: FormBuilder, private router: Router, private http: Http,
        private token: TokenService) {
        if (window.sessionStorage.access_token && window.sessionStorage.access_token !== 'null') {
            if (window.sessionStorage.last_endpoint && window.sessionStorage.last_endpoint !== 'null') {
                this.router.navigate([window.sessionStorage.last_endpoint]);
            } else {
                this.router.navigate(['/appointments']);
            }
        }
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
                window.sessionStorage.access_token = token;
                this.router.navigate(['/appointments']);
            }
        }.bind(this));
    }

    showFormControls(form: any) {
        return form && form.controls['email'] &&
            form.controls['email'].value;
    }
}
