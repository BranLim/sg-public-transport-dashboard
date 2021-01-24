import { Component, OnInit } from '@angular/core';
import { LtaApiService } from './LtaApiService';

@Component({
    selector: 'transport-dashboard',
    templateUrl: 'dashboard.component.html'

})
export class DashboardComponent implements OnInit{

    //private ltaApiService: LtaApiService;
    transports: string[] = ['test1','test2','test3','test4','test5','test6'];

    ngOnInit(){

    }

}