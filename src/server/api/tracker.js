export default class TrackerHandler {
    constructor(trackerInteractor) {
        this.trackerInteractor = trackerInteractor;
    }

    getTrackerById() {
        return (req, res) => {
            this.trackerInteractor.getTrackerById(req.params.id).then(data => {
                res.send(data);
            });
        };
    }
}
