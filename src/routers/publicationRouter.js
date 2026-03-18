import express from 'express'
import postRouter from './routers/postRouter.js'

publication.get('/', (req, res) => {
  res.send('Exemplo de GET na rota /post')
})

publication.post('/', (req, res) => {
  res.send('Exemplo de POST na rota /post')
})

publication.put('/', (req, res) => {
  res.send('Exemplo de PUT na rota /post')
})

publication.patch('/', (req, res) => {
  res.send('Exemplo de PATCH na rota /post')
})

publication.delete('/', (req, res) => {
  res.send('Exemplo de DELETE na rota /post')
})

export default Router;