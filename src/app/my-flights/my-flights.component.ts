import { Component, OnInit } from '@angular/core';

import {Flight} from '../model/flight';
import { FlightsService } from 'src/app/service/flights.service';

@Component({
  selector: 'app-my-flights',
  templateUrl: './my-flights.component.html',
  styleUrls: ['./my-flights.component.scss']
})
export class MyFlightsComponent implements OnInit {
  public flights : Flight[];

  constructor(private flightService: FlightsService) {}

  ngOnInit() {
    this.flights = this.flightService.getFlightsMockData();
    //this.getFlightsData();
  }

  // get the data from backend service api
  private getFlightsData() {
    this.flightService.getFlightsData().subscribe(data => {
      this.flights = data;
    });
  }

  onRowEditInit(flight: Flight) {
    console.log(flight);
    console.log('Edit Init Event Called');
    //this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(flight: Flight) {
    console.log(flight);
    console.log('Edit Save Event Called');
   
  }

  onRowEditCancel(flight: Flight, index: number) {
    console.log(flight);
    console.log(this.flights[index]);
    console.log('Edit Cancel Event Called');
  }

}
