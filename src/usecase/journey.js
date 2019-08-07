export default class JourneyInteractor {
    constructor(journeyRepository, trackerRepository) {
        this.jr = journeyRepository;
        this.tr = trackerRepository;
    }

    async getJourneyDetailsById(id) {
        try {
            let journey = await this.jr.getJourneyById(id);
            let tracker = await this.jr.getTrackerByJourneyId(id);
            let details = await this.tr.getTrackerDetailsByIds(tracker);

            journey.tracker = details;
            return journey;
        } catch (e) {
            console.error('[getJourneyDetailsByID]', e);
        }
    }

    createJourney(journey) {
        try {
            return 'OK';
        } catch (e) {
            console.error('[]', e);
        }
    }
}
