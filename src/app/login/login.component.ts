import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  isLoginMode = true;
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode
  }
  login() {
    window.localStorage.setItem("authtoken","123");
    this.route.navigate(["home"])
    }
}
