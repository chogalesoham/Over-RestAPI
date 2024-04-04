const mongoose = require("mongoose");
const products = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name, featured } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  const productData = await products.find(req.query);
  res.status(200).json(productData);
};

const getAllProductsTest = async (req, res) => {
  const { company, name, featured } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  const productData = await products.find(req.query);
  res.status(200).json(productData);
};

module.exports = { getAllProducts, getAllProductsTest };
