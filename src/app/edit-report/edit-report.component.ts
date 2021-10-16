import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SellReportService } from '../sell-report.service';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.css']
})
export class EditReportComponent implements OnInit {

  constructor(public dialogbox : MatDialogRef<EditReportComponent>,public sellService:SellReportService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }


  onClose(){
    this.dialogbox.close();
    this.sellService.filter('Register click');
  }

  onSubmit(form:NgForm)
  {
    this.sellService.UpdateOrder(form.value).subscribe(
      res=>{this.snackBar.open(res.toString(),'',{
        duration:5000,
        verticalPosition:'top'
      })
      })
   
  }

}
