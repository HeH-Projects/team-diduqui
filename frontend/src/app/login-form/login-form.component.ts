import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Secretary } from '../models/secretary';
import { SecretaryService } from '../services/secretary.service';
import { Http, Response } from '@angular/http';

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

    constructor(private secretaryService: SecretaryService, fb: FormBuilder, private http: Http) {
        this.complexForm = fb.group({
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])]
        });
    }

    // Subscribe:
    // First callback: initialisation
    // Second callback: error,
    // Third callback: Action after response
    ngOnInit() {
        // this.secretaryService.getAll().subscribe(
        //     (secretaries) => { this.secretaries = secretaries._embedded.secretary; },
        //     (error) => console.log(error),
        //     () => this.setSuccess());
    }

    setSuccess() {
        this.success = true;
    }

    connection(value: any) {
        // if (this.success) {
        // for (const secretary of this.secretaries) {
        // console.log(secretary);
        // if (value.email === secretary.email && value.password === secretary.password) {
        // window.location.href = '/';
        // return true;
        // }
        // }
        return this.http.post('http://localhost:9000/checkUser', value)
            .map(result => result.json())
            .subscribe(
                (secretary) => { console.log(secretary); }
            );
    }

    // Reveal in html:
    // Email via form.controls = {{showFormControls(UserForm)}}
    showFormControls(form: any) {
        return form && form.controls['email'] &&
            form.controls['email'].value;
    }
}
