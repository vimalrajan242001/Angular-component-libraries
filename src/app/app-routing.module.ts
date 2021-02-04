import { DatePickerComponent } from './date-picker/date-picker.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { CalenderComponent } from './calender/calender.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:"",component:HomepageComponent},
  {path:'calender',component:CalenderComponent},
  {path:'datepicker',component:DatePickerComponent},
  {path:'aggrid',component:AgGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
