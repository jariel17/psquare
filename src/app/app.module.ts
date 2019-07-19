import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpRequest } from 'selenium-webdriver/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDD24jNbdcnYmR_HlIPoc4-gBuwJu6G5KE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
