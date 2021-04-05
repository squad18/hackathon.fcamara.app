import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = 'http://localhost:8080/api/responsavel';
  private options: any = { headers: new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'}) }


  constructor(private http:HttpClient) { }

  createData(data: any) {
    return this.http.post(`${this.api}`, JSON.stringify(data), this.options);
  }

  readData(){
    return this.http.get(`${this.api}`);
  }

}
