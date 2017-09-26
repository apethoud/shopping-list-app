import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyListComponent } from './my-list.component';
import { BrowseComponent } from './browse.component';
import { SearchComponent } from './search.component';
import { FoodItemService } from './food-item.service'

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    MyListComponent,
    BrowseComponent,
    SearchComponent
  ],
  providers: [ FoodItemService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
