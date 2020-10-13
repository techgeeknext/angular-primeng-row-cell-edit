import { Injectable } from '@angular/core';
import { Flight } from "../model/flight";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class FlightsService {
  
  private MYFLIGHTS: Flight[] = [
    {"flightNumber" : "FS1298", "origin": "LAX", "destination" : "LHR"},
    {"flightNumber" : "FS1201", "origin": "LAX", "destination" : "LHR"},
  ];

  constructor(private http: HttpClient) { }

  // to test with local mock data
  public getFlightsMockData() : Flight[]{
    return this.MYFLIGHTS;
  }

  // to test with service api 
  public getFlightsData() : Observable<Flight[]>{
    let url = "http://localhost:8080/flights";
    return this.http.get<Flight[]>(url);
  }
}