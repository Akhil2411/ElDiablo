import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {


  foodItemDetails?:FoodItem[];

  foodItemDetail?:any;

  itemId?:number;
  itemCode?:string;
  itemName?:string;
  itemType?:string ;
  pricePerItem?:number ;
  totalStock?:number;


  display = "none";
  
  constructor(private foodItemService : FoodItemService) { 
    this.GetAllFoodDetails();
  }

  ngOnInit(): void {
  }

  GetAllFoodDetails(){
    this.foodItemService.GetAllFoodItem().subscribe(
      data=>{
        this.foodItemDetails=data
      }
    );
  }


  GetFoodItemById(itemId:any)
  {
    this.foodItemService.GetFoodItemById(itemId).subscribe(
      data=>{
        this.foodItemDetail=data;
        this.itemId=data.ItemId;
        this.itemCode=data.ItemCode;
        this.itemName=data.ItemName;
        this.itemType=data.ItemType;
        this.pricePerItem=data.PricePerItem;
        this.totalStock=data.TotalStock;
      }
    );

  }



  UpdateFoodItem()
  {
    let foodItemData:FoodItem={
      ItemId:this.itemId,
      ItemCode:this.itemCode,
      ItemName:this.itemName,
      ItemType:this.itemType,
      PricePerItem:this.pricePerItem,
      TotalStock:this.totalStock
    };

    this.foodItemService.UpdateFoodItem(foodItemData).subscribe(
      data=>{
        this.GetAllFoodDetails();
      }
    )
  }

  DeleteFoodItem(itemId : any){
    this.foodItemService.DeleteFoodItem(itemId).subscribe(
      data => {
        this.GetAllFoodDetails();
      }
    );
    
  }


  //Model
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
//Modelcomplete



onItemIdValueChanged(event : any){
  this.foodItemDetail.ItemId = this.itemId;
 
}

onItemCodeValueChanged(event : any){
  this.foodItemDetail.ItemCode = this.itemCode;
 
}

onItemNameValueChanged(event : any){
  this.foodItemDetail.ItemName = this.itemName;
 
}

onItemTypeValueChanged(event : any){
  this.foodItemDetail.ItemType = this.itemType;
 
}

onPricePerItemValueChanged(event : any){
  this.foodItemDetail.PricePerItem = this.pricePerItem;
 
}

onTotalStockValueChanged(event : any){
  this.foodItemDetail.TotalStock = this.totalStock;
 
}


clickEventTrigger(itemId:any){
this.openModal();
this.GetFoodItemById(itemId);
}

}
