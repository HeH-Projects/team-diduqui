import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { TokenService } from './token.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DogService {
    constructor(private http: Http, private token: TokenService) { }

    makeHeaders() {
        const headers: Headers = new Headers();
        headers.append('Authorization', 'bearer ' + this.token.getToken());
        return new RequestOptions({ headers: headers });
    }

    getAll() {
        return this.http.get('/api/dog', this.makeHeaders()).map((response: Response) => response.json());
    }

    getByName(name: string) {
        return this.http.get('/api/dog/search/findByName?name=' + name, this.makeHeaders()).map((response: Response) => response.json());
    }

    getByDogBreed(dogBreed: string) {
        return this.http.get('/api/dog/search/findByDogBreed?dogBreed=' + dogBreed, this.makeHeaders()).map((response: Response) => response.json());
    }

    getBySize(size: string) {
        return this.http.get('/api/dog/search/findBySize?size=' + size, this.makeHeaders()).map((response: Response) => response.json());
    }

    getByWeight(weight: string) {
        return this.http.get('/api/dog/search/findByWeight?weight=' + weight, this.makeHeaders()).map((response: Response) => response.json());
    }

    getByDescription(description: string) {
        return this.http.get('/api/dog/search/findByDescription?description=' + description, this.makeHeaders()).map((response: Response) => response.json());
    }

}
