const express = require('express')
const server = express()

const port = 14

server.get('/me', (req, res) => {
  res.status(200).json({
    name: 'Gael',
    age: 19,
    country: 'MX'
  })
})

server.post('/metas', (req, res) => {
  res.status(201).json({
    hobbie_1: 'Playing Halo',
    hobbie_2: 'Studying Python',
    hobbie_3: 'Painting'
  })
})

server.patch('/metas', (req, res) => {
  res.status(202).json({
    goal_1: 'Finishing the pokedex by the end of the week',
    goal_2: 'Getting a frontend developer job'
  })
})

server.put('/business', (req, res) => {
  res.status(202).json({
    company_1: 'MercadoLibre',
    company_2: 'Google',
    company_3: 'Globant'
  })
})


server.listen(port, () =>{
  console.log(`Server started at port ${port}`)
})