import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        window.sessionStorage.last_endpoint = '/customers';
        // const navElems = document.getElementsByTagName('li');
        // for (let i = 0; i < navElems.length; i++) {
            // navElems[i].classList.remove('active');
        // }
        document.getElementById('nav-customers').classList.add('active');
    }

}
