import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

 
  foodItemDetails?:FoodItem[];

  foodItemDetail?:any;

  itemId?:number;
  itemCode?:string;
  itemName?:string;
  itemType?:string;
  pricePerItem?:number ;
  totalStock?:number;

  
  constructor(private foodItemService : FoodItemService) { }

  ngOnInit(): void {
  }

  InsertFoodItemData()
  {
    let food : FoodItem = {
      ItemId:this.itemId,
      ItemCode:this.itemCode,
      ItemName:this.itemName,
      ItemType:this.itemType,
      PricePerItem:this.pricePerItem,
      TotalStock:this.totalStock
    }; 
    this.foodItemService.InsertFoodItem(food).subscribe(
      data => {
        this.GetAllFoodDetails();
      }
    );
  }
  GetAllFoodDetails(){
    this.foodItemService.GetAllFoodItem().subscribe(
      data=>{
        this.foodItemDetails=data
      }
    );
  }

}
