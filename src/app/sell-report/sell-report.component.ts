import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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

  
  constructor(private sellReportService : SellReportService,private dialog:MatDialog) { 
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


}
