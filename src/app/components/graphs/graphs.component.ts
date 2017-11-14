import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SalesComponent } from '../sales/sales.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GraphsComponent extends SalesComponent implements OnInit {
graphData:any[] = new Array();

  constructor(public dataService:DataService) { 
    super(dataService);
  }

  getGraphs(year:number, week?:number) {
    this.graphData = [];

    for (let i = 0; i < this.organizers.length; i++) {
      let addData:any = new Array();
      let salesTotal:any;

      if (week) {
        this.sortSales(i, year, week);
        
          this.dataService.getSalesSorted(i+1, year, week).subscribe(salesTotal => {
            salesTotal = salesTotal;
            console.log(salesTotal[0].tickets);
          
            addData = {
              "organizer": this.organizers[i].name,
              "expectedSales": (Math.ceil(this.organizers[i].expectedYearTotal/52)),
              "sales": salesTotal[0].tickets,
              "percentage": (Math.floor(this.ticketsSold/(this.organizers[i].expectedYearTotal/52)*100))
            };
  
            console.log(`This is [${i}], so the sales are: ${salesTotal[0].tickets}`);
            console.log(`Add data sales: ${addData.sales}`);
            console.log(`sales data: ${this.graphData}`);
            this.graphData.push(addData);
        });
      } else {
        let salesTotalYear:number = 0;
        this.sortSales(i, year);
        
        this.dataService.getSalesSorted(i+1, year).subscribe(salesTotal => {
          salesTotal = salesTotal;
          
          for (let j = 0; j < 52; j++) {
            try {
              salesTotalYear += salesTotal[j].tickets;
            }
            catch (err) {
              //console.log(`Error: ${err}`)
            }
          }

          addData = {
            "organizer": this.organizers[i].name,
            "expectedSales": (Math.ceil(this.organizers[i].expectedYearTotal)),
            "sales": salesTotalYear,
            "percentage": (Math.floor(salesTotalYear/this.organizers[i].expectedYearTotal*100))
          };

          this.graphData.push(addData);
          
        });
      }
    }
  }

  ngOnInit() {
    //this.getGraphs(2017);
  }

}
