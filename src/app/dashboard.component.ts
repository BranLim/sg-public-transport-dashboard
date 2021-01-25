import { Component, OnInit } from '@angular/core';
import { LtaApiService } from './LtaApiService';
import { BusStop } from './shared/models/bus-stop.model';
import { formatDate } from '@angular/common';

@Component({
    selector: 'transport-dashboard',
    templateUrl: 'dashboard.component.html'

})
export class DashboardComponent implements OnInit {

    private ltaApiService: LtaApiService;
    transports: BusStop[] = [
        { busStopCode: '1234', busNumber: '99', busStopName: 'Blk 123' },
        { busStopCode: '1234', busNumber: '242', busStopName: 'Blk 123' },
        { busStopCode: '7584', busNumber: '193', busStopName: 'Blk 222' },
        { busStopCode: '7584', busNumber: '242', busStopName: 'Blk 222' },
        { busStopCode: '4324', busNumber: '185', busStopName: 'Blk 234' },
        { busStopCode: '4324', busNumber: '99', busStopName: 'Blk 234' }];

    currentTime?: string;


    constructor(ltaApiService: LtaApiService) {
        this.ltaApiService = ltaApiService;
    }

    ngOnInit() {
        this.startTimer();
    }

    private startTimer() {
        setInterval(() => {
            this.currentTime = formatDate(new Date(), 'dd-MM-yyyy HH:mm:ss', 'en', '+8');
        }, 1000);
    }

}