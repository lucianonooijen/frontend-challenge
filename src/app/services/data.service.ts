import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(public http:Http) {

  }

  getOrganizers() {
    return this.http.get('/api/organizers')
      .map(res => res.json());
  }

  getSales() {
    return this.http.get('/api/sales')
      .map(res => res.json());
  }
  
  getSalesSorted(id?:number, year?:number, week?:number) {
    let parameters:string = "";
    if (id) {
      parameters += `${id}/`;
    }
    if (year) {
      parameters += `${year}/`;
    }
    if (week) {
      parameters += `${week}`;
    }

    return this.http.get(`/api/sales/${parameters}`)
      .map(res => res.json());
  }

}
