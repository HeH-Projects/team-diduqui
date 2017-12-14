import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-secretary',
    templateUrl: './secretary.component.html',
    styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        window.sessionStorage.last_endpoint = '/secretary';
        const navElems = document.getElementsByTagName('li');
        for (let i = 0; i < navElems.length; i++) {
            navElems[i].classList.remove('active');
        }
        document.getElementById('nav-secretary').classList.add('active');
    }

}
