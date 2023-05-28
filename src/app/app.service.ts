import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getUserList(){

    return this.http.get<any>('assets/users-list.json');
  }

  getBankList(){
    return this.http.get<any>('assets/bank-group.json');
  }
}
