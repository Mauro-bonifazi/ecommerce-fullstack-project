const Product = require("../models/product.model");

exports.getAllProducts = async (name) => {
  return await Product.find({
    $or: [
      { name: { $regex: ".*" + name + ".*", $options: "i" } },
      { description: { $regex: ".*" + name + ".*", $options: "i" } },
    ],
  });
};

exports.getProduct = async (id) => {
  return await Product.findById(id);
};

exports.createProduct = async (data) => {
  const product = new Product(data);
  return await product.save();
};

exports.updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
