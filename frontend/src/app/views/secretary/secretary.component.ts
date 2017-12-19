import { Component, OnInit } from '@angular/core';
import { SecretaryService } from '../../services/secretary.service';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'app-secretary',
    templateUrl: './secretary.component.html',
    styleUrls: ['./secretary.component.css'],
    providers: [SecretaryService]
})
export class SecretaryComponent implements OnInit {

    secretaries: String[];

    constructor(private secretaryService: SecretaryService) { }

    ngOnInit() {

        this.secretaryService.getAll().subscribe(
            data => {
                this.secretaries = data['secretary'];
            },
            error => console.error(error)
        )
    }

}
