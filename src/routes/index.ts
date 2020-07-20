import express from 'express';
import usersRoutes from '@routes/users/users.route';

const app = express();

app.use(usersRoutes)

export default app;