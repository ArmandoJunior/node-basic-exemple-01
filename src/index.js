const { request, response } = require('express')
const express = require('express')

const app = express()

app.get('/', (request, response) => {
    return response.json({
        message: 'Home'
    })
})

app.get('/projects', (request, response) => {
  return response.json([
      'Projeto 1',
      'Projeto 2',
      'Projeto 3',
      'Projeto 4',
      'Projeto 5',
  ])
})

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5',
        'Projeto 6',
    ])
})

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 13',
        'Projeto 4',
        'Projeto 5',
        'Projeto 6',
    ])
})

app.patch('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 31',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5',
        'Projeto 6',
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 5',
        'Projeto 6',
    ])
})

app.listen(3333, () => {
    console.log('server runing in localhost:3333')
})