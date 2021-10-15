import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElDiablo';


  sideBarOpen=true;   // sidebar open by default

  sidebarToggler(){
    this.sideBarOpen=!this.sideBarOpen;  //reverse the case to open and close
  }
}
