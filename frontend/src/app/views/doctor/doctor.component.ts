import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        window.sessionStorage.last_endpoint = '/doctors';
        const navElems = document.getElementsByTagName('li');
        for (let i = 0; i < navElems.length; i++) {
            navElems[i].classList.remove('active');
        }
        document.getElementById('nav-doctors').classList.add('active');
    }

}
