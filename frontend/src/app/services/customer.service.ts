import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { TokenService } from './token.service';

@Injectable()
export class CustomerService {
    constructor(private http: Http, private token: TokenService) { }

    makeHeaders() {
        const headers: Headers = new Headers();
        headers.append('Authorization', 'bearer ' + this.token.getToken());
        return new RequestOptions({headers: headers});
    }

    getAll() {
        return this.http.get('/api/customer', this.makeHeaders()).map((response: Response) => response.json());
    }

    getByLastname(lastname: string) {
        return this.http.get('/api/customer/search/findByLastname?lastname=' + lastname, this.makeHeaders())
            .map((response: Response) => response.json());
    }

    getByFirstname(firstname: string) {
        return this.http.get('/api/customer/search/findByFirstname?firstname=' + firstname, this.makeHeaders())
            .map((response: Response) => response.json());
    }

    getByEmail(email: string) {
        return this.http.get('/api/customer/search/findByEmail?email=' + email, this.makeHeaders())
            .map((response: Response) => response.json());
    }

    getByPhone(phone: string) {
        return this.http.get('/api/customer/search/findByPhone?phone=' + phone, this.makeHeaders())
            .map((response: Response) => response.json());
    }

    getByAddress(address: string) {
        return this.http.get('/api/customer/search/findByAddress?address=' + address, this.makeHeaders())
            .map((response: Response) => response.json());
    }

    getByBillingAddress(billingAddress: string) {
        return this.http.get('/api/customer/search/findByBillingAddress?billingAddress=' + billingAddress, this.makeHeaders())
            .map((response: Response) => response.json());
    }

}
