const mongoose = require("mongoose");
const {Product} =require("./Product")
const mongoUri = "mongodb://127.0.0.1/Mansoryy";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;

const getAllProducts = () => {
return Product.find()
}

const posteprod=(newp)=>{
  return Product.create(newp)
}

const deleteprod=(id)=>{
  return Product.findByIdAndDelete(id)
}
const updateprod=(id,newp)=>{
  return Product.findByIdAndUpdate(id,newp)
}



module.exports = {
  db,
  getAllProducts,
  deleteprod,
  updateprod,
  posteprod
};
