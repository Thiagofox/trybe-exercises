const express = require('express');
const app = express();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function(_req, res) {
  drinks.sort(function (a, b) {
    if(a.name > b.name){
      return 1;
    }
    if (a.name < b.name){
      return -1;
    }
    return 0;
  });
  res.json(drinks);
});

app.get('/drinks/search', function(req, res) {
  const { name } = req.query;
  const filterDrinks = drinks.filter((item) => item.name.includes(name));
  res.status(200).json(filterDrinks);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const result = drinks.find((item) => item.id === parseInt(id));

  if (!result) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(result);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});