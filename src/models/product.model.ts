import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
},{
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  });

  const ProductModel =  mongoose.model("product", productSchema);

  export {ProductModel};