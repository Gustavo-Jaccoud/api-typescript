import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { routes } from "./routes/product.routes";
import { connection } from "./infra/database";

const app = express()
connection;
app.use(express.json());
app.use(routes);
app.listen(3333, ()=>{
    console.info(`Api running on port ${3333}`);
});

