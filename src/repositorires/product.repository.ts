import { ProductModel } from "../models/product.model";
import { ProductDto } from "../models/dtos/product.dto";

export class ProductRepository{

    static async getAll(){
        return await ProductModel.find({});
    }

    static async getById(id : string){
        return await ProductModel.findById(id);
    }

    static async create(data: ProductDto){
        return await ProductModel.create(data);
    }

    static async update(id: string, data: ProductDto) {
        return await ProductModel.findByIdAndUpdate(id, data, { new: true });
    }

    static async delete(id: string){
        return await ProductModel.findByIdAndDelete(id);
    }
}