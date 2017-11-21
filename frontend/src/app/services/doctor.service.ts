import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DoctorService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/doctor').map((response: Response) => response.json());
    }

    getByLastname(lastname: string) {
        return this.http.get('/api/doctor/search/findByLastname?lastname=' + lastname).map((response: Response) => response.json());
    }

    getByFirstname(firstname: string) {
        return this.http.get('/api/doctor/search/findByFirstname?firstname=' + firstname).map((response: Response) => response.json());
    }

    getByEmail(email: string) {
        return this.http.get('/api/doctor/search/findByEmail?email=' + email).map((response: Response) => response.json());
    }

    getByPhone(phone: string) {
        return this.http.get('/api/doctor/search/findByPhone?phone=' + phone).map((response: Response) => response.json());
    }

    getBySpecialty(specialty: string) {
        return this.http.get('/api/doctor/search/findBySpecialty?specialty=' + specialty).map((response: Response) => response.json());
    }

}
