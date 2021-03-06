import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MdCardModule} from '@angular2-material/card';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdButtonModule} from '@angular2-material/button';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdIconModule} from '@angular2-material/icon';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdRadioModule} from '@angular2-material/radio';
import {MdInputModule} from '@angular2-material/input';
import {MdProgressBarModule} from '@angular2-material/progress-bar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    MdButtonModule,
    MdButtonToggleModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdCheckboxModule,
    MdRadioModule,
    MdInputModule,
    MdProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
