import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddSellComponent } from './add-sell/add-sell.component';
import { SellReportComponent } from './sell-report/sell-report.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { FrontEndComponent } from './front-end/front-end.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FoodMenuComponent,
    AddItemComponent,
    AddSellComponent,
    SellReportComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    FrontEndComponent,
  
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot([]),
    MatSidenavModule ,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
