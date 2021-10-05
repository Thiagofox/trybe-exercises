const router = require('express').Router()


const dbProducts = [
  { id: 1, name: 'Iphone 11', price: 5400.0 },
  { id: 2, name: 'Notebook Samsung', price: 7035.0 },
  { id: 3, name: 'Monitor Gamer LG curvo', price: 3335.0 },
  { id: 4, name: 'Microfone Gamer X-force', price: 1035.0 },
  { id: 5, name: 'Roteador TP-Link 1009', price: 535.0 },
];

const validateParams = (req, res, next) => {
  const { id, name, price } = req.body
  if(!id) return res.status(400).json({ message: 'Voce precisa informar o ID'})
  if(!name) return res.status(400).json({ message: 'Voce precisa informar o name'})
  if(!price) return res.status(400).json({ message: 'Voce precisa informar o price'})
  next()
}

const validateToken = (req, res, next) => {
  const token = req.headers.authorization
  if(token !== 'xablau') 
    return res.status(400).json({ message: "Você não tem autorização para fazer essa requisição" })
  next()
}

// Endpoint busca todos produtos
router.get('/', (req, res) => {
    res.status(200).json(dbProducts)
});

// Endpoint que cadastra produto
router.post('/', validateToken, validateParams, (req, res) => {
  const { id, name, price } = req.body
  dbProducts.push({ id, name, price })
  res.status(200).json({ message: 'Produto cadastrado com sucesso!' })
});

// Endpoint que atualiza produto
router.put('/', validateToken, validateParams, (req, res) => {
  const { id, name, price } = req.body
  const indexProduct = dbProducts.findIndex((p) => p.id === Number(id))

  dbProducts[indexProduct] = { ...dbProducts[indexProduct], name, price }
  res.status(200).json({ message: 'Produto cadastrado com sucesso!' })
});

module.exports = router;