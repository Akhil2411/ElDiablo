import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FoodItem } from './food-item';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  url:string="https://localhost:44324/api/FoodItem";

  constructor(private http:HttpClient) { }


  formData!:FoodItem;


  GetAllFoodItem()
  {
    return this.http.get<FoodItem[]>(this.url+"/getAllFoodItem");
  }

  GetFoodItemById(itemId:number):Observable<FoodItem>
  {
    return this.http.get<FoodItem>(this.url+"/getFoodItemById/"+itemId);
  }

  UpdateFoodItem(foodItem:FoodItem):Observable<FoodItem>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<FoodItem>(this.url+"/updateFoodItem/"+foodItem.ItemId,foodItem,httpOptions);
  }

  InsertFoodItem(foodItem:FoodItem):Observable<FoodItem>
  {
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<FoodItem>(this.url+"/insertFoodItem",foodItem,httpOptions);
  }

  DeleteFoodItem(itemId:number):Observable<FoodItem>
  {
    return this.http.delete(this.url+'/deleteFoodItem/'+itemId);
  }

  
  private _listeners=new Subject<any>();
  listen():Observable<any>{
    return this._listeners.asObservable();
  }
  
  filter(filterBy:string){
    this._listeners.next(filterBy);
  }
  
}
  

