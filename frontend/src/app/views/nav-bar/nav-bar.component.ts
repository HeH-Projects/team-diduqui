import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goTo(value: string) {
        this.router.navigate(['/' + value]);
    }

    logout() {
        window.sessionStorage.token = null;
        this.router.navigate(['/']);
    }

}
