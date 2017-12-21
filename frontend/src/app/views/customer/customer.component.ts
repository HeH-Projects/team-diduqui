import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css'],
    providers: [CustomerService]

})
export class CustomerComponent implements OnInit {

    customers: String[];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        window.sessionStorage.last_endpoint = '/customers';
        const navElems = document.getElementsByTagName('li');
        for (let i = 0; i < navElems.length; i++) {
            navElems[i].classList.remove('active');
        }
        document.getElementById('nav-customers').classList.add('active');

        this.customerService.getAll().subscribe(
            data => {
                this.customers = data['customer'];
            },
            error => console.error(error)
        );
    }

}
