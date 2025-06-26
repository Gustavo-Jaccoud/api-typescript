import mongoose  from "mongoose";

const url  = process.env.MONGODB_URL ?? "mongodb://localhost:27017/banco";

const connection =  mongoose.connect(url).then(() => {
    console.log("✅ Conectado ao MongoDB");
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar ao MongoDB:", err);
  });

  export {connection};