const express = require('express')
//import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('Exemplo de Get na rota /user')
})

app.post('/', (req, res) => {
  res.send('Exemplo de Get na rota /user')
})

app.put('/', (req, res) => {
  res.send('Exemplo de Get na rota /user')
})

app.patch('/', (req, res) => {
  res.send('Exemplo de Get na rota /user')
})

app.delete('/', (req, res) => {
  res.send('Exemplo de Get na rota /user')
})

app.listen(port, () => {
  console.log(`Servidor rodando no http://localhost${port}`)
})
