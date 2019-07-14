import { Component, OnInit } from '@angular/core';
import { GetcontactsService } from '../getcontacts.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.sass']
})
export class ContactlistComponent implements OnInit {
  contactList;
  searchterm;
  constructor(private getC:GetcontactsService) { }

  ngOnInit() {
      this.getC.getContactsList().subscribe(res=>
        this.contactList=res
        );
  }

}
