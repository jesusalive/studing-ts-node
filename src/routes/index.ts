import express from 'express';
import userRoutes from '@routes/users/user.route';

const app = express();

app.use(userRoutes)

export default app;