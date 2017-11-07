import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// We need to import the ReactiveFormsModule and HttpModule
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }          from '@angular/http';

import { AppComponent }      from './app.component';
import { UserFormComponent } from './user-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        UserFormComponent
    ],
    bootstrap: [ AppComponent ]
    })
    export class AppModule { }
