import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomService {
    constructor(private http: Http, private token: TokenService) { }

    makeHeaders() {
        const headers: Headers = new Headers();
        headers.append('Authorization', 'bearer ' + this.token.getToken());
        return new RequestOptions({headers: headers});
    }

    getAll() {
        return this.http.get('/api/room', this.makeHeaders()).map((response: Response) => response.json());
    }

    getByName(name: string) {
        return this.http.get('/api/room/search/findByName?name=' + name, this.makeHeaders()).map((response: Response) => response.json());
    }

    getByDescription(description: string) {
        return this.http.get('/api/room/search/findByDescription?description=' + description, this.makeHeaders())
            .map((response: Response) => response.json());
    }

}
