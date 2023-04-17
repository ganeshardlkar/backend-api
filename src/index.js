import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/database.js";
import routes from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);
app.listen(PORT, async () => {
    await connect();
    console.log(`Listening on port ${PORT}`);
});