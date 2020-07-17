import express from 'express';
import "reflect-metadata";
import { createConnection } from "typeorm";
import userRoutes from '@routes/users/user.route'

const app = express();
createConnection();

app.use(userRoutes);

app.listen(8080)