import { Component, OnInit,ViewChild } from '@angular/core';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
   value:string =""
  constructor() { }
  config = {
    firstDayOfWeek: 'su',
    monthFormat: 'MMM, YYYY',
    locale: 'en',
    min:'2021-02-03 12:50',
    minTime:'2021-02-5 15:50',
    required:true,
    minDate:'2021-02-5 15:50'
  };
  ngOnInit(): void {
  }
  handlesubmit(){
    if(this.value ){
      alert(this.value)
    }else{
      alert("Select a date & time")
      
  }
  }
}
