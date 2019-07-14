import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { contactModel } from './contactModel';

@Injectable({
  providedIn: 'root'
})
export class GetcontactsService {

  constructor(private http:HttpClient) { }

  getContactsList(): Observable<contactModel[]>{
   return this.http.get<contactModel[]>("http://localhost:3000/contacts");
  }

  updateContact(obj:contactModel,id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return  this.http.put("http://localhost:3000/contacts/"+id,obj,httpOptions)
    .subscribe(res=>console.log(res),err=>console.log(err));
    
  }  
  
  deletecontact(id){
    return this.http.delete("http://localhost:3000/contacts/"+id)
    .subscribe(res=>console.log(res),err=>console.log(err));
  }

  addcontact(obj:contactModel){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return  this.http.post("http://localhost:3000/contacts",obj,httpOptions)
    .subscribe(res=>console.log(res),err=>console.log(err));
    
  }

  

}
