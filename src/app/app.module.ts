import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CalenderComponent } from './calender/calender.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
   
]);
@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    CalenderComponent,
    AgGridComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DpDatePickerModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
