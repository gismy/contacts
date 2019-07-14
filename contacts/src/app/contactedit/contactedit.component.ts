import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetcontactsService } from '../getcontacts.service';
import { contactModel } from '../contactModel';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.sass']
})
export class ContacteditComponent implements OnInit{
  contactId;
  contact;
  myForm;
  myFormBuilder;
  contactName;
  contactNumber;
  ngOnInit() {
     
  }
 
  constructor(private router:ActivatedRoute,private getC:GetcontactsService,private nrouter:Router) {
    this.contactId=this.router.snapshot.queryParams.cId;
    this.contactName=this.router.snapshot.queryParams.cName;
    this.contactNumber=this.router.snapshot.queryParams.cNum;
    this.myFormBuilder=new FormBuilder();
    this.myForm=this.myFormBuilder.group({
      c_name:new FormControl(this.contactName,[Validators.required,,Validators.pattern('[A-Za-z ]+')]),
      c_number:new FormControl(this.contactNumber,[Validators.required,,Validators.pattern('[0-9]*')])
    }); 
   }
 
  get c_name(){
    return this.myForm.get('c_name');
  }
  get c_number(){
    return this.myForm.get('c_number');
  }
 
  submitMyForm(myform){
    this.getC.updateContact(myform,this.contactId);
    alert("Contact sucessfully updated");
  }
}
