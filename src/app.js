import Express from 'express';
import Knex from 'knex';
import Server from './server/server';
import API from './server/api/api';
import JourneyRepository from './repository/journey';
import TrackerRepository from './repository/tracker';

import JourneyInteractor from './usecase/journey';
import TrackerInteractor from './usecase/tracker';

import JourneyHandler from './server/api/journey';
import TrackerHandler from './server/api/tracker';

const /** Configuration */
    config = {
        db: {
            client: 'pg',
            host: '10.164.5.150',
            user: 'postgres',
            password: 'postgres',
            database: 'tetra',
            port: 5432
        },
        api: {
            port: 8080
        }
    },
    db = new Knex({
        client: config.db.client,
        connection: {
            host: config.db.host,
            user: config.db.user,
            password: config.db.password,
            database: config.db.database,
            port: config.db.port,
            connectTimeout: 5000
        }
    }),
    /**
     * Repository
     */
    jr = new JourneyRepository(db),
    tr = new TrackerRepository(db),
    /**
     * Interactor
     */
    ji = new JourneyInteractor(jr, tr),
    ti = new TrackerInteractor(tr),
    /**
     * API Handler
     */
    jh = new JourneyHandler(ji, ti),
    th = new TrackerHandler(ti),
    /**
     * API
     **/
    apiServer = new Express(),
    // apiRouter = new apiServer.Router(),
    // apiRouter = new Router({ prefix: '/api' }),
    api = new API(apiServer, config.api.port, jh, th),
    /**
     * Server
     */
    server = new Server(api);

server.run();
