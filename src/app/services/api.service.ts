import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * User endpoints start here
   */
  //create new user
  createUser(newUser: any){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'} ) };
    return this.http.post('http://localhost:3200/api/users/createUser',newUser, httpOptions);
  }

  loginUser(currentUser: any){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post('http://localhost:3200/api/users/login', currentUser, httpOptions);
  }

  resetPassword(currentUser: any){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.put('http://localhost:3200/api/users/resetPassword', currentUser, httpOptions);
  }

  getUser(token: any){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'} ) };
    return this.http.post('http://localhost:3200/api/users/getUser',token, httpOptions);
  }

  updateName(currentUser: any){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.put('http://localhost:3200/api/users/updateName', currentUser, httpOptions);
  }

  updateUsername(currentUser: any){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.put('http://localhost:3200/api/users/updateUsername', currentUser, httpOptions);
  }


  /**
   * User endpoints end here
   */

  /**
   * Text endpoints start here
   */

   createTextChannel(messageObject: any){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post('http://localhost:3200/api/textChannel/createNewChannel', messageObject, httpOptions);
   }

   getAllChannels(){
     console.log("called");
     return this.http.get<any>('http://localhost:3200/api/textChannel/getCurrentChannels');
   }

   //replyToUser
   replyToUser(messageObject: any){
     console.log("sending you: ", messageObject);
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post('http://localhost:3200/api/textChannel/replyToUser', messageObject, httpOptions);
   }

  /**
   * Text endpoints end here
   */


   //newSOS

   /**
   * SOS endpoints start here
   */

  sendSOS(sosObject: any){
    console.log("sending you: ", sosObject);
   const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
   return this.http.post('http://localhost:3200/api/textChannel/newSOS', sosObject, httpOptions);
  }

   /**
   * SOS endpoints end here
   */




}
