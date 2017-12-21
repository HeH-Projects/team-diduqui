import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TokenService } from './token.service';

import 'rxjs/add/operator/map';

@Injectable()
export class DoctorService {
    constructor(private http: Http, private token: TokenService) { }

    makeHeaders() {
        const headers: Headers = new Headers();
        headers.append('Authorization', 'bearer ' + this.token.getToken());
        return new RequestOptions({ headers: headers });
    }

    getAll() {
        return this.http.get('/api/doctor', this.makeHeaders()).map((response: Response) => response.json());
    }

    getByLastname(lastname: string) {
        return this.http.get('/api/doctor/search/findByLastname?lastname=' + lastname, this.makeHeaders())
            .map((response: Response) => response.json());
    }

    getByFirstname(firstname: string) {
        return this.http.get('/api/doctor/search/findByFirstname?firstname=' + firstname, this.makeHeaders())
            .map((response: Response) => response.json());
    }

    getByEmail(email: string) {
        return this.http.get('/api/doctor/search/findByEmail?email=' + email, this.makeHeaders())
            .map((response: Response) => response.json());
    }

    getByPhone(phone: string) {
        return this.http.get('/api/doctor/search/findByPhone?phone=' + phone, this.makeHeaders())
            .map((response: Response) => response.json());
    }

    getBySpecialty(specialty: string) {
        return this.http.get('/api/doctor/search/findBySpecialty?specialty=' + specialty, this.makeHeaders())
            .map((response: Response) => response.json());
    }
}
