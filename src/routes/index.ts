import express from 'express';
import userRoute from '@routes/users/user.route';

const app = express();

app.use(userRoute)

export default app;