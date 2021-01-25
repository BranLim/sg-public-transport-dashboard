import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class LtaApiService {

    constructor(private http: HttpClient) { }

    getBusServicesForBusStop(busStopNumber: string) {

    }

}