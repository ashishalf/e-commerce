const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('products.product');
  res.json(cart);
};

exports.addToCart = async (req, res) => {
  const product = await Product.findById(req.body.productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const cart = await Cart.findOne({ user: req.user._id });
  if (cart) {
    const productExists = cart.products.find((p) => p.product.toString() === product._id.toString());
    if (productExists) {
      productExists.quantity += 1;
    } else {
      cart.products.push({ product: product._id });
    }
    await cart.save();
  } else {
    await Cart.create({ user: req.user._id, products: [{ product: product._id }] });
  }
  res.status(201).json({ message: 'Product added to cart' });
};

exports.removeFromCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });
  if (cart) {
    cart.products = cart.products.filter((p) => p.product.toString() !== req.params.id);
    await cart.save();
    res.json({ message: 'Product removed from cart' });
  } else {
    res.status(404).json({ message: 'Cart not found' });
  }
};
