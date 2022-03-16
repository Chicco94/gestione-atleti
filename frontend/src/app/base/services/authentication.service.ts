import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private socket: Socket,private router:Router) {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || 'false'));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
      return this.currentUserSubject.value;
  }

  login(username:string, password:string) {
      this.socket.emit('login',{username,password});
      this.onLoginSuccesful();
      this.onLoginUnsuccesful();
  }
  onLoginSuccesful(){
    console.log('onLoginSuccesful');
    return this.socket.fromEvent('loginSuccesful').subscribe((data)=>{
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      console.log(data);
      this.router.navigate(['/']);
      return data;
    })
  }
  onLoginUnsuccesful(){
    console.log('onLoginUnsuccesful');
    return this.socket.fromEvent('loginUnsuccesful').subscribe((data)=>{
      // Need to alert the user of unsuccesful login
      console.log(data);
      return data;
    })
  }

  logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
