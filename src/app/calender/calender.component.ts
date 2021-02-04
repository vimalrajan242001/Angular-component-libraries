import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
  import { Calendar } from '@fullcalendar/core';
import bootstrapPlugin from '@fullcalendar/bootstrap';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
     dateClick: this.handleDateClick.bind(this),
    plugins: [ bootstrapPlugin ],
  themeSystem: 'bootstrap'
  };


  constructor() { }

  ngOnInit(): void {
  }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
