import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public authService : AuthService){}
  userEmail : String;
  userPassword : String;
  error = "wrong user";
  ngOnInit(): void {
  }
login(){

  this.authService.login()
}
  logout(){
    this.authService.logout();
  }
}
