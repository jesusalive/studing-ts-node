import express from 'express';
import "reflect-metadata";
import routes from '@routes/index'
import { createConnection } from "typeorm";

const app = express();
createConnection();

app.use(routes)

app.listen(8080)