import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// We need to import the ReactiveFormsModule and HttpModule
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/home.component';
import { LoginFormComponent }   from './login-form/login-form.component';
import { SecretaryService }     from './services/secretary.service';

const appRoutes: Routes = [
    {path:'', component:LoginFormComponent}
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
        HomeComponent,
        LoginFormComponent
    ],
    providers: [SecretaryService],
    bootstrap: [AppComponent]
})
export class AppModule { }
