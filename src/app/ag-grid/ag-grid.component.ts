import { Component, OnInit } from '@angular/core';
import { GetuserService } from '../getuser.service';
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})

export class AgGridComponent implements OnInit {
  
  rowData: any;
      
      columnDefs = [
          { field: 'id' },
          { field: 'email' },
          { field: 'first_name' },
          { field: 'last_name' },
          { field: 'avatar' },
      ];
  

  constructor(private userservice:GetuserService) { }

  ngOnInit() {
    this.userservice.getuserdata().subscribe(data => this.rowData = data.data)
  }
}