export default class TrackerInteractor {
    constructor(trackerRepository) {
        this.tr = trackerRepository;
    }

    async getTrackerDetailByIds(ids) {
        try {
            return await this.tr.getTrackerDetailsByIds(ids);
        } catch (e) {
            console.error('[getJourneyDetailsByID]', e);
        }
    }
}
