export class BusStop {

    busStopCode?: string;
    busStopName?: string;
    busNumber?: string;
    busArrivalTime?: Date;


}

export class BusService {
    constructor(
        public ServiceNo: string,
        public Operator: string
    ) { }
}

export class BusArrival {
    constructor(
        public BusStopCode: string,
        public Services?: BusService[]
    ) { }
}

