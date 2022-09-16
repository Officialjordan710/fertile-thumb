import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  x = document.getElementById("login");
  y = document.getElementById("register");
  z = document.getElementById("btn");

  register(): void{
    this.x.style.left = "-400px";
    this.y.style.left = "50px";
    this.z.style.left = "110px";
  }

  login(): void{
    this.x.style.left = "50px";
    this.y.style.left = "450px";
    this.z.style.left = "0";
  }

}
