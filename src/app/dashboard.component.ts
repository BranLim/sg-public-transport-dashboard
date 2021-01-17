import { Component, OnInit } from '@angular/core';
import { LtaApiService } from './LtaApiService';

@Component({
    selector: 'transport-dashboard',
    templateUrl: 'dashboard.component.html'

})
export class DashboardComponent implements OnInit{

    private ltaApiService: LtaApiService;

    ngOnInit(){

    }

}