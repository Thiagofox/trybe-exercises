const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-utils');

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
}));

app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();
  })
);