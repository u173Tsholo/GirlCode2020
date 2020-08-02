import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'daisy';
  show: boolean = false;

  constructor(private router: Router) {}


  logout(){
    this.show = false;
    localStorage.removeItem('token');
    this.router.navigate(['/index']);
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')!= null)
    {
      console.log(localStorage.getItem('token'));
      this.show = true;
    }
  }
}
