import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  //we need to show and hide the navbar...so we use @output and eventemitter

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }


  //now we add the toggling function

  toggleSidebar() 
  {
    this.toggleSidebarForMe.emit();
  }

}
