import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/customer').map((response: Response) => response.json());
    }

    getByLastname(lastname: string) {
        return this.http.get('/api/customer/search/findByLastname?lastname=' + lastname).map((response: Response) => response.json());
    }

    getByFirstname(firstname: string) {
        return this.http.get('/api/customer/search/findByFirstname?firstname=' + firstname).map((response: Response) => response.json());
    }

    getByEmail(email: string) {
        return this.http.get('/api/customer/search/findByEmail?email=' + email).map((response: Response) => response.json());
    }

    getByPhone(phone: string) {
        return this.http.get('/api/customer/search/findByPhone?phone=' + phone).map((response: Response) => response.json());
    }

    getByAddress(address: string) {
        return this.http.get('/api/customer/search/findByAddress?address=' + address).map((response: Response) => response.json());
    }

    getByBillingAddress(billingAddress: string) {
        return this.http.get('/api/customer/search/findByBillingAddress?billingAddress=' + billingAddress)
                        .map((response: Response) => response.json());
    }

}
