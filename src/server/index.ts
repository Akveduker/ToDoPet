import { config } from 'dotenv';
import express from 'express';
import registerRoute from '@server-routes/register';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import loginRoute from '@server-routes/login';
import refreshRoute from '@server-routes/refresh';
import userRoute from '@server-routes/user';
import deskRoute from '@server-routes/desk';
import columnRoute from '@server-routes/column';
import taskRoute from '@server-routes/task';
import validRoute from '@server-routes/valid';
import cors from 'cors';

const app = express();
config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

const port = process.env.PORT || 5000;

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASS}@cluster0.ctbmkxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

app.use(loginRoute);
app.use(registerRoute);
app.use(refreshRoute);
app.use(userRoute);
app.use(validRoute);
app.use('/desk', deskRoute);
app.use('/column', columnRoute);
app.use('/task', taskRoute);

app.listen(port, () => {
  console.log(`server app listening on port ${port}`);
});
