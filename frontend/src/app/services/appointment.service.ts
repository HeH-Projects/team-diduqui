import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppointmentService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/appointment').map((response: Response) => response.json());
    }

    getByName(name: string) {
        return this.http.get('/api/appointment/search/findByName?name=' + name).map((response: Response) => response.json());
    }

    getByDescription(description: string) {
        return this.http.get('/api/appointment/search/findByDescription?description=' + description).map((response: Response) => response.json());
    }

    getByDuration(duration: string) {
        return this.http.get('/api/appointment/search/findByDuration?duration=' + duration).map((response: Response) => response.json());
    }

}
