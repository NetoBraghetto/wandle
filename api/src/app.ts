import 'dotenv/config';
import express, { Application } from "express";
import './database';
import api from "./routes/api";
const app:Application = express();

app.use(api);

export default app;
