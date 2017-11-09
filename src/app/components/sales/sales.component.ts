/**
 * Quick note:
 * All calculations below are based on all organizers
 * starting in the same year. There are no methods (yet)
 * implemented to get a more accurate expected ticket
 * total in a way that the total expected tickets sold 
 * is equal to the sum of expected tickets per year
 * per organizer times the amount of years per organizer.
 * It is possible to implement this, but then the user
 * experience would not be optimal as it will take quite
 * some more computing power.
 */

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
  currentOrganizer:string;
  weeks:number[] = new Array(52);
  inputErrors:string[];
  
  statistics:boolean = false;
  ticketsExpected:number = 0;
  ticketsSold:number = 0;
  ticketsPercentage:number = 0;

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

  getYears = (sales) => {
    let lowest:number = Number.MAX_SAFE_INTEGER;
    let highest:number = Number.MIN_SAFE_INTEGER;
    let delta:number = 0;

    for (let i = 0; i < sales.length; i++) {
      if (sales[i].year < lowest)
        lowest = sales[i].year;
      if (sales[i].year > highest)
        highest = sales[i].year;
      console.log(`${highest} - ${lowest} = ${highest-lowest}`)
    }

    delta = highest-lowest+1;

    console.log(`Delta: ${highest-lowest+1}`)

    return delta;

  }

  sortSales(organizer?:number, year?:number, week?:number) {
    //console.log(organizer, year, week)
    if (((year || week) && !organizer) || (week && !year)) {
      this.inputErrors = [];
      this.statistics = false;
      if ((year || week) && !organizer) {
        this.inputErrors.push("You can only select a year and week if you also select an organizer");
      }
      if (week && !year) {
        this.inputErrors.push("You can only select a week if you also select a year");
      }
    } else {
      this.inputErrors = [];
      this.statistics = true;

      this.dataService.getSalesSorted(organizer, year, week).subscribe(sortedSales => {
        this.sortedSales = sortedSales;
        console.log(this.sortedSales);

        if (organizer){
          this.ticketsExpected = this.organizers[organizer-1].expectedYearTotal;
        } else {
          this.ticketsExpected = 0;
          for (let i = 0; i < this.organizers.length; i++) {
            this.ticketsExpected += this.organizers[i].expectedYearTotal;
          }
        }
        if (!year)
          this.ticketsExpected = Math.ceil(this.ticketsExpected*this.getYears(sortedSales));
        if (week)
          this.ticketsExpected = Math.ceil(this.ticketsExpected/52);
        //console.log(this.getYears(sortedSales));

        this.ticketsSold = 0;
        for(let i = 0; i < this.sortedSales.length; i++){
          this.ticketsSold += this.sortedSales[i].tickets;
        }

        this.ticketsPercentage = Math.floor(this.ticketsSold/this.ticketsExpected*100);
        
      });

    }
  }

  ngOnInit() {

  }

}
