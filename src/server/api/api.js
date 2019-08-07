export default class API {
    constructor(api, port, journeyHandler, trackerHandler) {
        this.api = api;
        this.port = port;
        this.journeyHandler = journeyHandler;
        this.trackerHandler = trackerHandler;
    }

    run() {
        console.log('xxxx ');
        this.api.get('/journey/:id', this.journeyHandler.getJourneyById());

        this.api.listen(this.port, () => {
            console.info('[API] listen on port:', this.port);
        });
    }
}
