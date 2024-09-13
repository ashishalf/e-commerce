const Product = require('../models/productModel');
const path = require('path');

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

exports.addProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const imageUrl = req.file ? req.file.path.replace(/\\/g, '/') : ''; // Fix path for Windows

  try {
    const product = await Product.create({
      name,
      description,
      price,
      imageUrl
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product' });
  }
};


exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.imageUrl = req.body.imageUrl || product.imageUrl;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};
