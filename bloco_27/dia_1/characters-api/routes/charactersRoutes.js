const router = require('express').Router()

const { getAllcharacters, insertcharacter } = require('../models/charactersModel')

router.get('/', async (req, res) => {
  const data = await getAllcharacters()
  res.status(200).json(data)
})

router.post('/', async (req, res) => {
  
  try {
    const { name, cartoon } = req.body
    const data = await insertcharacter(name, cartoon)
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Problema ao inserir o registro' })
  }
  
})

module.exports = router