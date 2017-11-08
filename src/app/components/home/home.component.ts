import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    sales:any;
    salesTotal:number = 0;
    totalTicketsExpected:number = 0;
  
    constructor(public dataService:DataService) { 

      // Gets sales from data service
      this.dataService.getSales().subscribe(sales => {
        this.sales = sales;

        // Calculate sales total
        for(let i = 0; i < this.sales.length; i++){
          this.salesTotal += this.sales[i].tickets;
        }
      });

      // Calculate total expected ticket total
      this.dataService.getOrganizers().subscribe(_organizers => {
        let organizers = _organizers
        for(let i = 0; i < organizers.length; i++){
          this.totalTicketsExpected += organizers[i].expectedYearTotal;
        }
      }); 
    }

    ngOnInit() {
    }

}
