const ProductModel = require("../models/productModel");

//Get products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await ProductModel.find({});

  res.json({
    success: true,
    products,
  });
};

//Get Single products API - /api/v1/products/:id

exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      // message: error.message,
      message: 'Unable to get Product with that ID'
    });
  }

  // console.log(req.params.id, "ID");
};
