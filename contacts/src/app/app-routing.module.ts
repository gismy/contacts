import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactviewComponent } from './contactview/contactview.component';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { ContactaddComponent } from './contactadd/contactadd.component';

const routes: Routes = [
  {
    path:"",
    component:ContactlistComponent
  } ,
  {
    path:"contactlist",
    component:ContactlistComponent
  } , 
  {
    path:"contactview",
    component:ContactviewComponent
  },
  {
    path:"contactview/contactedit",
    component:ContacteditComponent
  },
  {
    path:"contactadd",
    component:ContactaddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
