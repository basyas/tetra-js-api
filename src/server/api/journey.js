export default class JourneyHandler {
    constructor(journeyInteractor, trackerInteractor) {
        this.journeyInteractor = journeyInteractor;
        this.getJourneyById.bind(this);
    }

    getJourneyById() {
        return (req, res) => {
            this.journeyInteractor
                .getJourneyDetailsById(req.params.id)
                .then(data => {
                    res.send(data);
                });
        };
    }
}
