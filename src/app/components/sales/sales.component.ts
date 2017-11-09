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
  sortedSales:any;
  weeks:number[] = new Array(52);

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

  sortSales(organizer?:number, year?:number, week?:number) {

    console.log(organizer, year, week)

    this.dataService.getSalesSorted(organizer, year, week).subscribe(sortedSales => {
      this.sortedSales = sortedSales;
      console.log(this.sortedSales);
    });
  }

  ngOnInit() {
  }

}
