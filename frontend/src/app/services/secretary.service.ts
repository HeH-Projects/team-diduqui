import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SecretaryService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/secretary').map((response: Response) => response.json());
    }

    getByLastname(lastname: string) {
        return this.http.get('/api/secretary/search/findByLastname?lastname=' + lastname).map((response: Response) => response.json());
    }

    getByFirstname(firstname: string) {
        return this.http.get('/api/secretary/search/findByFirstname?firstname=' + firstname).map((response: Response) => response.json());
    }

    getByEmail(email: string, token: string) {
        return this.http.get('/api/secretary/search/findByEmail?email=' + email + token).map((response: Response) => response.json());
    }

    getByPhone(phone: string) {
        return this.http.get('/api/secretary/search/findByPhone?phone=' + phone).map((response: Response) => response.json());
    }
}
