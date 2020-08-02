import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RateDialogComponent } from '../rate-dialog/rate-dialog.component';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  rateDialogRef: MatDialogRef<RateDialogComponent>;
  token: any;

  sosObject: any;

  constructor( private dialog: MatDialog, private api:ApiService, private router: Router) { }

  btnsos(){
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

  route(){
    this.router.navigate(['/chat']);
  }


  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (localStorage.getItem('token')== null)
    {
      this.router.navigate(['/index']);
    }
  }

}
