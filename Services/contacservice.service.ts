import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContacserviceService {


 apiurl:""

  constructor(private http:HttpClient) { 

    LoadAllContacts():Observable<Object>{
      return this.http.get(this.apiurl),
    }
    Contacsbyid(id:any){
      return this.http.get(this.apiurl+'/'+code);
    }
    deleteContacsbyid(id:any){
      return this.http.delete(this.apiurl+'/'+id);
    }
    AddEmployee(inputdata:any){
      return this.http.post(this.apiurl,inputdata);
    }








  }
}
