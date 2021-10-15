import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen=true;   // sidebar open by default

  sidebarToggler(){
    this.sideBarOpen=!this.sideBarOpen;  //reverse the case to open and close
  }
}



