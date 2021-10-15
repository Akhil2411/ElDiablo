import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SellReport } from './sell-report';

@Injectable({
  providedIn: 'root'
})
export class SellReportService {

  url:string="https://localhost:44324/api/Orders";

  constructor(private http:HttpClient) { }

  GetAllOrder()
  {
    return this.http.get<SellReport[]>(this.url+"/getAllOrders");
  }
}

