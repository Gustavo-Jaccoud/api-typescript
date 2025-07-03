import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

const routes = Router();

routes.get('/test', (req, res) => {
    res.status(200).json({message : 'Ok'});
});

routes.get('/produto', ProductController.getAll);

routes.post('/produto', ProductController.create);

routes.put("/produto/:id", ProductController.update);

export { routes };