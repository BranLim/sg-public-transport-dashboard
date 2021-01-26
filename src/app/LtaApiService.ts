import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { BusArrival } from './shared/models/bus-stop.model';
import { map } from 'rxjs/operators'

@Injectable()
export class LtaApiService {

    private baseUrl = "http://datamall2.mytransport.sg/ltaodataservice";
    private apiKey = "";

    constructor(private httpClient: HttpClient) { }

    getBusServicesForBusStop(busStopNumber: string): Observable<BusArrival> {

        const url = `${this.baseUrl}/BusArrivalv2?BusStopCode=${busStopNumber}`;
        return this.httpClient.get(url,
            { headers: { 'AccountKey': this.apiKey, 'Content-Type':'text/plain'}, withCredentials: true }
        )
            .pipe(map((data: any) =>
                new BusArrival(data.BusStopCode))
            );
    }

}