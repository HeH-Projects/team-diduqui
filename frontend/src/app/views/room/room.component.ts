import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.css'],
    providers: [RoomService]
})
export class RoomComponent implements OnInit {

    rooms: Room[];

    constructor(private roomService: RoomService) { }

    ngOnInit() {
        window.sessionStorage.last_endpoint = '/rooms';
        const navElems = document.getElementsByTagName('li');
        for (let i = 0; i < navElems.length; i++) {
            navElems[i].classList.remove('active');
        }
        document.getElementById('nav-rooms').classList.add('active');

        this.roomService.getAll().subscribe(data => {
            if (data) {
                this.rooms = data.content;
            }
        });
    }

}
