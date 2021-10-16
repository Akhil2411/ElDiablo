import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FoodItemService } from '../food-item.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {

  constructor(public dialogbox : MatDialogRef<EditFoodComponent>,public service:FoodItemService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }


  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    this.service.UpdateFoodItem(form.value).subscribe(
      res=>{this.snackBar.open(res.toString(),'',{
        duration:5000,
        verticalPosition:'top'
      })
      })
   
  }

}
