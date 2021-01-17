import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LtaApiService {
    
    constructor(private http: HttpClient) { }

}