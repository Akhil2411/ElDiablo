import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap,delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn:boolean=false;

  constructor() { }

  login(username?:string,password?:string):Observable<any>{
    this.isUserLoggedIn=username=="admin" && password=="admin";
    localStorage.setItem('isUserLoggedIn',this.isUserLoggedIn ? "true" : "false");

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val=>{
        console.log("Is User Authentication Successfull :"+val);
      })
    );

    }


    logout(){
      this.isUserLoggedIn=false;
      localStorage.removeItem('isUserLoggedIn');
    }
}
