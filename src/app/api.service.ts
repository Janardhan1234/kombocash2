import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://kombo-cash-api.herokuapp.com/';

  constructor(private http:HttpClient) { }

  getCollection(){
    return this.http.get(`${this.baseUrl}/${'viewCategory'}`);
  }

  postLoanQuery(obj){
    return this.http.post(`${this.baseUrl}/${'userLoanQuery'}`,obj);
  }

  postUserLogin(obj){
    // https://kombo-cash-api.herokuapp.com/userLogin
    
    return this.http.post(`${this.baseUrl}/${'userLogin'}`, obj);
  }

}
