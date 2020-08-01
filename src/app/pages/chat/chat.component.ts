import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  channelList: any;
  messageList: any;
  admin: boolean;
  userRole: string;

  //////////////
  userChatServiceForm: FormGroup;
  token: any;
  currentUser: any;
  userName: any;

  constructor(private formBuilder: FormBuilder, private api:ApiService, private router: Router) { }

  // setInterval(myMethod, 5000);

  // function myMethod( )
  // {
  // }

  sendThisMessage(msgObject: any){
    console.log("Form submitted: ", msgObject.newMessage);
    if(this.admin){
      this.currentUser = {
        "token": this.token,
        "user": this.userName,
        "message": msgObject.newMessage
      };
      this.api.replyToUser(this.currentUser).subscribe( data => {
        console.log('Reply sent');
      });
    }
    else{
      this.currentUser = {
        "token": this.token,
        "role": "Admin",
        "message": msgObject.newMessage
      };
      this.api.createTextChannel(this.currentUser).subscribe( data => {
        console.log("We done");
      })
    }
  }

  getChannels(){
    // get all channels from api for admin user
    this.api.getAllChannels().subscribe( data => {
      console.log("Getting this object from the db: ", data);
      this.userName = data[0].user;
      //console.log("User is ", data[0].user, this.userName)
      this.channelList = data;
    })
  }

  getMessages(){
    // get all messages from api per user
  }

  sendMessage(){

  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    console.log("token ", this.token);
    this.userRole = localStorage.getItem('role');
    console.log("role ", this.userRole);
    if(this.userRole == "Admin"){ this.admin = true; }

    this.userChatServiceForm = this.formBuilder.group({
      newMessage: ['', [Validators.required]]

    });
    
    //if(this.admin){
      this.getChannels();
    //}
    //this.getMessages();
    //this.admin = false;
  }

}
