import { Component, OnInit } from '@angular/core';
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

  
  constructor(private sellReportService : SellReportService) { 
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

}
