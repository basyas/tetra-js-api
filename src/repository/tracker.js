import { resolve } from 'any-promise';

const TRACKER_TABLE = 'tracker',
    ALL_TRACKER_FIELD = [
        'id',
        'name',
        'expected_gtm',
        'create_by',
        'update_by',
        'create_time',
        'update_time'
    ];

export default class TrackerRepository {
    constructor(db) {
        this.db = db;
    }

    getTrackerById(id) {
        return new Promise((resolve, reject) => {
            resolve({
                id: id,
                a: 1,
                b: 2
            });
        });
        // return this.db
        //     .select(ALL_TRACKER_FIELD)
        //     .from(TRACKER_TABLE)
        //     .where('id', id)
        //     .then(response => response);
    }

    getTrackerDetailsByIds(id) {
        // return new Promise((resolve, reject) => {
        //     resolve({
        //         id: id,
        //         a: 1,
        //         b: 2
        //     });
        // });
        // console.log(
        //     this.db
        //         .select(ALL_TRACKER_FIELD)
        //         .from(TRACKER_TABLE)
        //         .whereIn('id', id)
        //         .toString()
        // );
        return this.db
            .select(ALL_TRACKER_FIELD)
            .from(TRACKER_TABLE)
            .whereIn('id', id)
            .then(response => response);
        // .catch(e => {
        //     console.log('0000000000', e);
        // });
    }
}
