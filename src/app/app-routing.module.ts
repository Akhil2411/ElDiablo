import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddSellComponent } from './add-sell/add-sell.component';
import { SellReportComponent } from './sell-report/sell-report.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[

  { path:'', redirectTo:'FoodMenu',pathMatch:'full' },
  { path:'FoodMenu', component:FoodMenuComponent },
  { path: 'AddItem', component : AddItemComponent},
  { path:'AddSell', component:AddSellComponent },
  { path: 'SellReport', component : SellReportComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
