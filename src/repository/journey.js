const JOURNEY_TABLE = 'journey',
    JOURNEY_TRACKER_TABLE = 'journey_tracker',
    ALL_JOURNEY_FIELD = [
        'id',
        'name',
        'device_type',
        'signature',
        'create_by',
        'update_by',
        'create_time',
        'update_time'
    ];

export default class JourneyRepository {
    constructor(db) {
        this.db = db;
    }

    getJourneyById(id) {
        console.log('getJourneyById');
        return new Promise((resolve, reject) => {
            resolve({
                id: id,
                a: 1,
                b: 2
            });
        });
        // return this.db
        //     .select(ALL_JOURNEY_FIELD)
        //     .from(JOURNEY_TABLE)
        //     .where('id', id)
        //     .then(response => response);
    }

    getTrackerByJourneyId(id) {
        console.log('getTrackerByJourneyId');
        return new Promise((resolve, reject) => {
            resolve({
                id: id,
                a: 1,
                b: 2
            });
        });
        // return this.db
        //     .select(ALL_JOURNEY_FIELD)
        //     .from(JOURNEY_TABLE)
        //     .where('id', id)
        //     .then(response => response);
    }

    getAllJourneyTracker(userId) {
        return this.db
            .select(['id', 'tracker_id'])
            .from(JOURNEY_TRACKER_TABLE)
            .where('journey_id', 1)
            .then(response => response);
    }
}
