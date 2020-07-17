import express from 'express';
import "reflect-metadata";
import { createConnection } from "typeorm";
import userRoute from '@routes/users/user.route'

const app = express();
createConnection();

app.use(userRoute)

app.listen(8080)