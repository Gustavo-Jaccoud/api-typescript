import express from "express";
import { routes } from "./routes/products.routes";

const app = express()


app.use(routes);
app.listen(3333, ()=>{
    console.info(`Api running on port ${3333}`);
});

