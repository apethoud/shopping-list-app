import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyListComponent } from './my-list.component';
import { BrowseComponent } from './browse.component';
import { SearchComponent } from './search.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MyListComponent,
    BrowseComponent,
    SearchComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
