import { Component, OnInit } from '@angular/core';
import { GetcontactsService } from '../getcontacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactview',
  templateUrl: './contactview.component.html',
  styleUrls: ['./contactview.component.sass']
})
export class ContactviewComponent implements OnInit {
  contactId;
  contact;
  constructor(private getC:GetcontactsService,private router:ActivatedRoute) { }

  ngOnInit() {
     this.contactId=this.router.snapshot.queryParams.cId;
     
     this.getC.getContactsList().subscribe(res=> {
        this.contact=res;
        this.contact= this.contact.filter(ele=>{ if (ele.id==this.contactId) return ele;});
     });
  }

  deleteContact(){
     this.getC.deletecontact(this.contactId); 
     alert("contact sucessfully deleted");
      }

}
