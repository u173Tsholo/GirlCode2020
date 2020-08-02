import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RateDialogComponent } from '../../rate-dialog/rate-dialog.component';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  n: number;
  rateDialogRef: MatDialogRef<RateDialogComponent>;
  token: any;

  sosObject: any;

  constructor( private dialog: MatDialog, private api:ApiService, private router: Router) { }

  btnsos(){
    this.n = this.n + 1;
    if (this.n == 1){
      alert("If this is an emergency, press this button 5 times");
    }
    if (this.n == 6){
      this.n = 0;

      this.rateDialogRef = this.dialog.open(RateDialogComponent);

      this.rateDialogRef.afterClosed().subscribe( result => {
        if (result != ""){
          this.sosObject = {
            "token": this.token,
            "rating": result
          };

          this.api.sendSOS(this.sosObject).subscribe( () => {
            // alert("Hang tight. Help is on the way!");
          });
          alert("Hang tight. Help is on the way!");
        }

      });

    }
  }

  route(){
    this.router.navigate(['/chat']);
  }


  ngOnInit(): void {
    this.n = 0;
    this.token = localStorage.getItem('token');
  }

}
