import { Component, OnInit } from '@angular/core';
import { GetcontactsService } from '../getcontacts.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactadd',
  templateUrl: './contactadd.component.html',
  styleUrls: ['./contactadd.component.sass']
})
export class ContactaddComponent implements OnInit {
  myForm;
  myFormBuilder;
  constructor(private getC:GetcontactsService) {
    this.myFormBuilder=new FormBuilder();
    this.myForm=this.myFormBuilder.group({
      c_name:new FormControl("",[Validators.required,,Validators.pattern('[A-Za-z ]+')]),
      c_number:new FormControl("",[Validators.required,,Validators.pattern('[0-9]*')])
    }); 
   }

  ngOnInit() {
  }
  get c_name(){
    return this.myForm.get('c_name');
  }
  get c_number(){
    return this.myForm.get('c_number');
  }
 
  submitMyForm(myform){
    this.getC.addcontact(myform);
    alert("Contact added sucessfully");
  }

}
