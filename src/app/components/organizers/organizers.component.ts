import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrganizersComponent implements OnInit {
  organizers:any;

  constructor(public dataService:DataService) { 
    this.dataService.getOrganizers().subscribe(organizers => {
      this.organizers = organizers;
      console.log(this.organizers);
    })
  }

  ngOnInit() {

  }

}
