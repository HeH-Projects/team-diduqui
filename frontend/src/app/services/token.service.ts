import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router/src/router';

@Injectable()
export class TokenService {

    data: any = null;
    username: string;
    password: string;
    router: Router;

    constructor(private http: Http) {
    }

    getToken() {
        if(this.data === null || typeof this.data === 'undefined') {

            window.sessionStorage.token = null;

            this.router.navigate(['/']);
        } else {
            return this.data.access_token;
        }
    }

    generate(email, password, callback) {
        this.username = email;
        this.password = password;

        const headers: Headers = this.makeHeaders();
        const options = new RequestOptions({headers: headers});
        return this.http.post('/oauth/token?grant_type=password&username=' + email + '&password=' + password, this.data, options)
            .map((res: Response) => res.json())
            .subscribe(data => {
                this.data = data;
                if (callback) {
                    callback(data);
                }
            }, (err: HttpErrorResponse) => {
                if (err.status === 401) {
                    callback('[ERROR]: Bad credentials');
                }
            });
    }

    makeHeaders() {
        const client = 'dogcare';
        const secret = 'secret';
        const headers: Headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(client + ':' + secret));
        headers.append('Content-Type', 'application/form-data');
        return headers;
    }

    refresh() {
        const headers: Headers = this.makeHeaders();
        const options = new RequestOptions({headers: headers});
        return this.http.post('/oauth/token?grant_type=refresh_token&refresh_token=' + this.data.refresh_token, this.data, options)
            .map((res: Response) => res.json())
            .subscribe(data => {
                this.data = data;
            }, (err: HttpErrorResponse) => {
                if ( err.error instanceof Error) {
                    console.log('An error occurred: ', err.error.message);
                } else {
                    console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
                    if (err.status === 401) {
                        this.generate(this.username, this.password, null);
                    }
                }
            });
    }

}
