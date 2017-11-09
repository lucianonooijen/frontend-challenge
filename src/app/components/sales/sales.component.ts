import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SalesComponent implements OnInit {
  organizers:any;
  sales:any;

  constructor(public dataService:DataService) { 
    this.dataService.getOrganizers().subscribe(organizers => {
      this.organizers = organizers;
      //console.log(this.organizers);
    })

    this.dataService.getSales().subscribe(sales => {
      this.sales = sales;
      //console.log(this.sales);
    })
  }

  sortSales(organizer) {
    console.log(organizer);
  }

  ngOnInit() {
  }

}
