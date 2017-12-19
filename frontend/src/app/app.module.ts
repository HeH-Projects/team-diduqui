import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// We need to import the ReactiveFormsModule and HttpModule
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SecretaryService } from './services/secretary.service';
import { TokenService } from './services/token.service';
import { LoginFormComponent } from './views/login-form/login-form.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { DoctorComponent } from './views/doctor/doctor.component';
import { RoomComponent } from './views/room/room.component';
import { CustomerComponent } from './views/customer/customer.component';
import { SettingComponent } from './views/setting/setting.component';
import { LogoutComponent } from './views/logout/logout.component';
import { SecretaryComponent } from './views/secretary/secretary.component';

const appRoutes: Routes = [
    { path: '', component: LoginFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'appointments', component: CalendarComponent },
    { path: 'customers', component: CustomerComponent },
    { path: 'doctors', component: DoctorComponent },
    { path: 'rooms', component: RoomComponent },
    { path: 'secretary', component: SecretaryComponent},
    { path: 'settings', component: SettingComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        LoginFormComponent,
        CalendarComponent,
        NavBarComponent,
        DoctorComponent,
        RoomComponent,
        CustomerComponent,
        SettingComponent,
        LogoutComponent,
        SecretaryComponent,
    ],
    providers: [SecretaryService, TokenService],
    bootstrap: [AppComponent]
})
export class AppModule { }
