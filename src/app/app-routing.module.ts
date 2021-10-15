import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddSellComponent } from './add-sell/add-sell.component';
import { SellReportComponent } from './sell-report/sell-report.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { FrontEndComponent } from './front-end/front-end.component';

const routes: Routes=[

  { path:'', component:FrontEndComponent },
  { path:'Login', component:LoginComponent },
  { path:'Front', component:FrontEndComponent },
 
   { path:'AdminHome', component:HomeComponent,canActivate : [AuthGuard]  , children:[
    { path:'', component:FoodMenuComponent},
    { path:'FoodItem', component:FoodMenuComponent},
    { path: 'AddItem', component : AddItemComponent},
    { path: 'SellReport', component : SellReportComponent},
    { path: 'AddSell', component : AddSellComponent},
    { path:'Logout', component:LogoutComponent }
  ]},
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
