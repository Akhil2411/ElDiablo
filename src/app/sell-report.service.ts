import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SellReport } from './sell-report';

@Injectable({
  providedIn: 'root'
})
export class SellReportService {

  url:string="https://localhost:44324/api/Orders";

  constructor(private http:HttpClient) { }


  formData!:SellReport;


  GetAllOrder()
  {
    return this.http.get<SellReport[]>(this.url+"/getAllOrders");
  }
  GetOrderById(orderId:number):Observable<SellReport>
  {
    return this.http.get<SellReport>(this.url+"/getOrderById/"+orderId);
  }

  UpdateOrder(order:SellReport):Observable<SellReport>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<SellReport>(this.url+"/updateOrder/"+ order.OrderId,order,httpOptions);
  }

  InsertOrder(order:SellReport):Observable<SellReport>
  {
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<SellReport>(this.url+"/insertOrder",order,httpOptions);
  }

  DeleteOrder(orderId:number):Observable<SellReport>
  {
    return this.http.delete(this.url+'/deleteOrder/'+orderId);
  }





private _listeners=new Subject<any>();
listen():Observable<any>{
  return this._listeners.asObservable();
}

filter(filterBy:string){
  this._listeners.next(filterBy);
}

}
