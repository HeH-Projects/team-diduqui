import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { TokenService } from './token.service';

@Injectable()
export class AppointmentService {
    constructor(private http: Http, private token: TokenService) { }

    makeHeaders() {
        const headers: Headers = new Headers();
        headers.append('Authorization', 'bearer ' + this.token.getToken());
        return new RequestOptions({headers: headers});
    }

    getAll() {
        return this.http.get('/api/appointment', this.makeHeaders()).map((response: Response) => response.json());
    }

    getByName(name: string) {
        return this.http.get('/api/appointment/search/findByName?name=' + name, this.makeHeaders())
            .map((response: Response) => response.json());
    }

    getByDescription(description: string) {
        return this.http.get('/api/appointment/search/findByDescription?description=' + description, this.makeHeaders())
                        .map((response: Response) => response.json());
    }

    getByDuration(duration: string) {
        return this.http.get('/api/appointment/search/findByDuration?duration=' + duration, this.makeHeaders())
            .map((response: Response) => response.json());
    }

}
