import express from 'express'
import postRouter from './routers/postRouter.js'

post.get('/', (req, res) => {
  res.send('Exemplo de GET na rota /post')
})

post.post('/', (req, res) => {
  res.send('Exemplo de POST na rota /post')
})

post.put('/', (req, res) => {
  res.send('Exemplo de PUT na rota /post')
})

post.patch('/', (req, res) => {
  res.send('Exemplo de PATCH na rota /post')
})

post.delete('/', (req, res) => {
  res.send('Exemplo de DELETE na rota /post')
})

export default Router;