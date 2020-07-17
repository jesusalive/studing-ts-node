import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import routes from '@routes/index';

class App {

    public express: express.Application

    constructor() {
        this.express = express();

        this.databaseConnection();
        this.routes();
    }

    routes() {
        this.express.use(routes);
    }

    async databaseConnection() {
        await createConnection();
    }
}

export default new App().express