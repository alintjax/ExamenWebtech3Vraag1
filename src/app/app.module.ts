import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamenSearchComponent } from './examen-search/examen-search.component';
import { ExamenListComponent } from './examen-list/examen-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list', component:ExamenListComponent
  },
  {
    path: 'search', component:ExamenSearchComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ExamenSearchComponent,
    ExamenListComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
