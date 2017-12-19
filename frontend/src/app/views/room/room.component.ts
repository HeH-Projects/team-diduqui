import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        window.sessionStorage.last_endpoint = '/rooms';
        const navElems = document.getElementsByTagName('li');
        for (let i = 0; i < navElems.length; i++) {
            navElems[i].classList.remove('active');
        }
        document.getElementById('nav-rooms').classList.add('active');
    }

}
