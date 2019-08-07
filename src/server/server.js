export default class Server {
    constructor(api) {
        this.api = api;
    }

    run() {
        this.api.run();
    }
}
