import { ProductService } from "../services/product.service";
import { Request, Response } from 'express';
import { httpResponse } from "../httpResponse/httpresponse";
import { ProductDto } from "../models/dtos/product.dto";

export class ProductController{
    static async getAll(req : Request, res : Response){
        const response = await ProductService.getAll();
        httpResponse.responseHttp(response, res);
    }

    static async create(req: Request, res : Response){
     
        const response = await ProductService.create(req.body);
        httpResponse.responseHttp(response,res)
    }

    static async update(req: Request, res: Response){
        const response = await ProductService.update(req.params.id, req.body);
        httpResponse.responseHttp(response, res);
    }

    static async delete(req: Request, res: Response){
        const response = await ProductService.delete(req.params.id);
        httpResponse.responseHttp(response, res);
    }
}