import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  channelList: any;
  messageList: any;
  admin: boolean;

  constructor() { }

  getChannels(){
    // get all channels from api for admin user
  }

  getMessages(){
    // get all messages from api per user
  }

  sendMessage(){

  }

  ngOnInit(): void {
    this.getChannels();
    this.getMessages();
    this.admin = false;
  }

}
