import express, { Application } from "express";
import api from "./routes/api";
const port = 3000;
const app:Application = express();

app.use(api);

app.listen(port, () : void => {

});

module.exports = app;
