import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// We need to import the ReactiveFormsModule and HttpModule
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }          from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginFormComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
