import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username? : string; 
  password? : string; 
  formData! : FormGroup; 

  constructor( private authService : AuthService , private router : Router ) { }

  ngOnInit(): void {

      this.formData = new FormGroup({
      username : new FormControl("username"),
      password : new FormControl("password")
    });
  }

  onClickSubmit(data : any)
  {
    this.username = data.username; 
    this.password = data.password; 
    this.authService.login(this.username,this.password).subscribe(
      data => {
        console.log("Is Login success " + data);
        if(data){
          this.router.navigate(['/AdminHome']);
        }
      }
    );
  }

}