import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditReportComponent } from '../edit-report/edit-report.component';
import { SellReport } from '../sell-report';
import { SellReportService } from '../sell-report.service';


@Component({
  selector: 'app-sell-report',
  templateUrl: './sell-report.component.html',
  styleUrls: ['./sell-report.component.css']
})
export class SellReportComponent implements OnInit {


  
  sellReportDetails?:SellReport[];

  OrderId?:number ;
  CustomerName?:string;
  ContactNumber?:number ;
  OrderDate?:string ;
  OrderAmount?:number ;

  
  constructor(private sellReportService : SellReportService,private dialog:MatDialog,private snackBar:MatSnackBar) { 
    this.GetAllOrderDetails();
  }


  ngOnInit(): void {
  }


  GetAllOrderDetails()
  {
    this.sellReportService.GetAllOrder().subscribe(
      data=>{
        this.sellReportDetails=data
      }
    );
  
  }

  onEdit(order:SellReport){
    this.sellReportService.formData=order;
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EditReportComponent,dialogConfig);
  }

  DeleteOrderItem(orderId : any){
    if(confirm("Are You sure to Delete?")){

      this.sellReportService.DeleteOrder(orderId).subscribe(
        data => {
          this.GetAllOrderDetails();
          this.snackBar.open(data.toString(),'',{
            duration:5000,
            verticalPosition:'top'
          })
        }
      );


    }
   
    
  }

}
