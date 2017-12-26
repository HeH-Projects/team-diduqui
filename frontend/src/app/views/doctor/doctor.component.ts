import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../models/doctor';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.css'],
    providers: [DoctorService]
})
export class DoctorComponent implements OnInit {

    doctors: Doctor[];

    constructor(private doctorService: DoctorService) { }

    ngOnInit() {
        window.sessionStorage.last_endpoint = '/doctors';
        const navElems = document.getElementsByTagName('li');
        for (let i = 0; i < navElems.length; i++) {
            navElems[i].classList.remove('active');
        }
        document.getElementById('nav-doctors').classList.add('active');

        this.doctorService.getAll().subscribe(data => {
            if (data) {
                this.doctors = data.content;
            }
        });
    }

}
