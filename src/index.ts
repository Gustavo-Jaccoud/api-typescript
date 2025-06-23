import express from "express";
import { Router } from "express";

const app = express()
const router = Router();

router.get('/test', (req, res) => {
    res.status(200).json({message : 'Ok'});
});

app.use(router);
app.listen(3333, ()=>{
    console.info('Api running on port ${3333}')
});

