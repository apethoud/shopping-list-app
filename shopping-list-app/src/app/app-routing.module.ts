import { NgModule }   from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { MyListComponent }   from './my-list.component';
import { BrowseComponent }   from './browse.component';
import { SearchComponent }   from './search.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-list', pathMatch: 'full' },
  { path: 'my-list', component: MyListComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'search', component: SearchComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}