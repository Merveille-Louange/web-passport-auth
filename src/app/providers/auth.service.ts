import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  message: any;

  constructor(private http : HttpClient) { }

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  public validate(email, password) {
    return this.http.get('http://localhost:3000/authenticate?username=' + email + '&password='+ password).toPromise()
  }
  public login() {
    return this.http.get('http://localhost:8000/login').toPromise()
  }
  public logout() {
    return this.http.get('http://localhost:8000/logout').toPromise();
  }
}
