import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  base_url = 'http://127.0.0.1:5000/';

  createHeaders(headers: HttpHeaders) {
    // headers.append('Authorization', 'Bearer '+localStorage.getItem('token')); // token headers
    headers.append('Content-Type' , 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*'); // Access-Control-Allow-Origin: https://www.mydomain.com
  }

  // predict
  predict(customer: Customer): Promise<Result | undefined> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.post<Result>(`${this.base_url}predict`, customer, {headers}).toPromise();
  }



}
