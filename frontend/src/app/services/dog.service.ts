import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DogService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/dog').map((response: Response) => response.json());
    }

    getByName(name: string) {
        return this.http.get('/api/dog/search/findByName?name=' + name).map((response: Response) => response.json());
    }

    getByDogBreed(dogBreed: string) {
        return this.http.get('/api/dog/search/findByDogBreed?dogBreed=' + dogBreed).map((response: Response) => response.json());
    }

    getBySize(size: string) {
        return this.http.get('/api/dog/search/findBySize?size=' + size).map((response: Response) => response.json());
    }

    getByWeight(weight: string) {
        return this.http.get('/api/dog/search/findByWeight?weight=' + weight).map((response: Response) => response.json());
    }

    getByDescription(description: string) {
        return this.http.get('/api/dog/search/findByDescription?description=' + description).map((response: Response) => response.json());
    }

}
