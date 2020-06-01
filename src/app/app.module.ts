import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ContentServerComponent } from './content-server/content-server.component';
@NgModule({
   declarations: [
      AppComponent,
      ServerComponent,
      ContentServerComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
