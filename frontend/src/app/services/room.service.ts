import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/doctor').map((response: Response) => response.json());
    }

    getByName(name: string) {
        return this.http.get('/api/doctor/search/findByName?name=' + name).map((response: Response) => response.json());
    }

    getByDescription(description: string) {
        return this.http.get('/api/doctor/search/findByDescription?description=' + description).map((response: Response) => response.json());
    }

}
