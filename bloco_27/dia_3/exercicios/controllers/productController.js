const express = require('express');
const ProductModel = require('../models/productModel');
const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if(product === null) {
    res.status(404).send({ message: 'Produto não encontrado' });
  }
  res.send(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);
    res.status(200).json(newProduct);
  } 
  catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
    res.status(200).json(products);
  } 
  catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
  res.send(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(req.params.id, name, brand);
    res.status(200).json(products)
  } 
  catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

module.exports = router;