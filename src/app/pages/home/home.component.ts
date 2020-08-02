import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  week: any = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthArray: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  todaysDateObject: Date = new Date(); //get todays date
  month: number = this.todaysDateObject.getUTCMonth() + 1; //extract month --> + 1 because start is index 0
  day: number = this.todaysDateObject.getUTCDate(); //extract day as a digit
  year: number = this.todaysDateObject.getUTCFullYear(); //extract year as a digit
  check: number;
  temp: string;
  firstDayOfTheMonth: Date; //= new Date(2020, 6 + 1, 1 - this.day); //check what day was the first of the month
  a: number; 
  weekOneArray: Array<any> = [];
  weekTwoArray: Array<any> = [];
  weekThreeArray: Array<any> = [];
  weekFourArray: Array<any> = [];
  weekFiveArray: Array<any> = [];
  weekSixArray: Array<any> = [];
  numberOfDaysInThisMonth: number;
  monthName: string;
  dayName: string;

   stringDayOfTheWeek: string  = this.week[this.todaysDateObject.getDay()];

   todaysDate: string = this.year + "/" + this.month + "/" + this.day;

   constructor() { }
   //months with 30 days - April, June, September, Nov
   //months with 31 days -Jan, March, May, July, Aug, Oct, Dec

   daysInMonth () {
       this.numberOfDaysInThisMonth  =  new Date(this.year, this.month, 0).getDate();
   }

   populate(){
     let dayCount = 0;
     let i = 0;
     for (i = 0; i < this.a; i++) {
       this.weekOneArray.push("-");
       dayCount++;
     }
     for (i = 1; i < 7; i++) {
       this.weekOneArray.push(i);
       dayCount++;
       if(dayCount == 7) {
         i++;
         dayCount = 0;
         break;
       }
     }
     for (i; dayCount < i; i++) {
       this.weekTwoArray.push(i);
       dayCount++;
       if(dayCount == 7) {
         i++;
         dayCount = 0;
         break;
       }
     }

     for (i; dayCount < i; i++) {
       this.weekThreeArray.push(i);
       dayCount++;
       if(dayCount == 7) {
         i++;
         dayCount = 0;
         break;
       }
     }

     for (i; dayCount < i; i++) {
      this.weekFourArray.push(i);
      dayCount++;
      if(dayCount == 7) {
        i++;
        dayCount = 0;
        break;
      }
    }

    for (i; dayCount < i; i++) {
      this.weekFiveArray.push(i);
      dayCount++;
      if(dayCount == 7) {
        i++;
        dayCount = 0;
        break;
      }
    }

    let count = 0;
    for (i; i < (this.numberOfDaysInThisMonth+1); i++) {
      count++;
      this.weekSixArray.push(i);
      if(i == (this.numberOfDaysInThisMonth+1) ) {
        break;
      }
    }

    for(count; count < 7; count++){
      this.weekSixArray.push("-");
    }

   }
 
 ngOnInit(): void {
   this.daysInMonth();
   this.firstDayOfTheMonth = new Date(this.year,  this.month, 0 - (this.day));//find out the textual day of the week of the first month
   this.firstDayOfTheMonth.toDateString();
   this.temp  = this.week[this.firstDayOfTheMonth.getDay()];
   this.monthName = this.monthArray[this.month];
   
   this.a = this.week.indexOf(this.temp);
   console.log("hey ",this.a);

   this.populate();
   
 }

}
