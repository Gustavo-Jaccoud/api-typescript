import { ProductDto } from "../models/dtos/product.dto";
import { ProductRepository } from "../repositorires/product.repository";

export class ProductService{

    static async getAll(){
        return await ProductRepository.getAll();
    }

    static async create(data:ProductDto){
        return await ProductRepository.create(data)
    }
    
    static async update(id:string, data:ProductDto){
        return await ProductRepository.update(id, data)
    }
}