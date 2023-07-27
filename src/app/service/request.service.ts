import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  _baseUrl = "http://localhost:8950"

  constructor(private http:HttpClient) { }

  addRequest(requests:any){
    return this.http.post(`${this._baseUrl}/api/cms/upload/file`,requests)
  }
}
