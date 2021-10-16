import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  
  constructor(private foodItemService : FoodItemService,private snackBar:MatSnackBar) { }

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
        this.snackBar.open(data.toString(),'',{
          duration:5000,
          verticalPosition:'top'
        });
        this.foodItemService.filter('Register click');
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
