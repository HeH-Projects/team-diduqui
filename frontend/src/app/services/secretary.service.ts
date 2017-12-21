import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import 'rxjs/add/operator/map';

@Injectable()
export class SecretaryService {
    constructor(private http: Http, private token: TokenService) { }

    makeHeaders() {
        const headers: Headers = new Headers();
        headers.append('Authorization', 'bearer ' + this.token.getToken());
        return new RequestOptions({headers: headers});
    }

    getAll() {
        return this.http.get('/api/secretary', this.makeHeaders()).map((response: Response) => response.json());
    }

    getByLastname(lastname: string) {
        return this.http.get('/api/secretary/search/findByLastname?lastname=' + lastname, this.makeHeaders()).map((response: Response) => response.json());
    }

    getByFirstname(firstname: string) {
        return this.http.get('/api/secretary/search/findByFirstname?firstname=' + firstname, this.makeHeaders()).map((response: Response) => response.json());
    }

    getByEmail(email: string, token: string) {
        return this.http.get('/api/secretary/search/findByEmail?email=' + email + token, this.makeHeaders()).map((response: Response) => response.json());
    }

    getByPhone(phone: string) {
        return this.http.get('/api/secretary/search/findByPhone?phone=' + phone, this.makeHeaders()).map((response: Response) => response.json());
    }
}
