import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart } from '../cart';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';
import { SellReport } from '../sell-report';
import { SellReportService } from '../sell-report.service';


@Component({
  selector: 'app-add-sell',
  templateUrl: './add-sell.component.html',
  styleUrls: ['./add-sell.component.css']
})
export class AddSellComponent implements OnInit {

 
  foodItemDetails!:FoodItem[];
  productDetail?:any;


  orderItemDetails?:SellReport[];

  foodItemDetail?:any;

  orderId?:number;
  itemCode?:string;
  itemName?:string;
  itemType?:string ;
  pricePerItem?:number ;
  totalStock?:number;

  customerName?:string;
  customerNumber?:string;

  Food?:string;
  quantity?:number;

  cartItemList: Cart[]=[];

  myDate = new Date().toString();

  date = new Date().toLocaleDateString();

  

  GrandTotal:number=0;

 

  constructor(private foodItemService : FoodItemService,private orderService:SellReportService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.GetAllFoodDetails();
    this.GetAllOrders();
  }

  
  GetAllFoodDetails(){
    this.foodItemService.GetAllFoodItem().subscribe(
      data=>{
        this.foodItemDetails=data
      }
    );
  }

  GetAllOrders(){
    this.orderService.GetAllOrder().subscribe(
      data=>{
        this.orderItemDetails=data
      }
    );
  }

  AddtoCart()
  {

    

    
    let data=this.foodItemDetails.filter((a:any)=>a.ItemName==this.Food);
    let multVal=this.getMultipliedValue(data[0].PricePerItem,this.quantity);
    this.cartItemList.push({ ItemName: this.Food, PricePerUnit: data[0].PricePerItem,TotalUnits:this.quantity,TotalCost:multVal });
    this.getTotal(multVal);

    

  }


  deleteItem(index:any){


    this.GrandTotal-=this.cartItemList[index].TotalCost!;

    const es = this.cartItemList.splice(index, 1);


    
  }


  getMultipliedValue(price:any, quantity:any) {
    let data= price * quantity;
    return data;
  }

  getTotal(multVal:any){
  
  this.GrandTotal+=multVal;
  }

  clearOrder(){
    this.cartItemList=[];
    this.GrandTotal=0;

    console.log(this.myDate);
    console.log(this.date);
  }



  SaveOrder()
  {
    let sell : SellReport = {
      OrderId:this.orderId,
      CustomerName:this.customerName,
      ContactNumber:this.customerNumber,
      OrderDate:this.date,
      OrderAmount:this.GrandTotal

  
    };
    this.orderService.InsertOrder(sell).subscribe(
      data => {
        this.GetAllOrders();
        this.snackBar.open(data.toString(),'',{
          duration:5000,
          verticalPosition:'top'
        });
        this.orderService.filter('Register click');
      }
    );
  }


  // decrementPrice(multval:any)
  // {

  //   this.GrandTotal-=multval;

  // }
  
  
}
