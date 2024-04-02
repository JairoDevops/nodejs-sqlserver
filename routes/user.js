const { Router } = require('express');

const router = Router()

router.get('/user' , (req, res)=> {
  res.send("obteniendo usuarios")
})

router.post('/userPost' , (req, res)=> {
  res.send("olocando usuarios usuarios")
})
router.put('/user/:id' , (req, res)=> {
  res.send("obteniendo usuarios")
})
router.delete('/user/:id' , (req, res)=> {
  res.send("obteniendo usuarios")
})

module.exports = router;