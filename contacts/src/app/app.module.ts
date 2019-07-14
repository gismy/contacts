import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import {HttpClientModule} from '@angular/common/http';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { ContactviewComponent } from './contactview/contactview.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ContactaddComponent } from './contactadd/contactadd.component';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactlistComponent,
    ContacteditComponent,
    ContactviewComponent,
    ContactaddComponent,
    SortPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
