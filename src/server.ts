import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'

const app = fastify()
// GET, POST, PUT, PATCH, DELETE;

app.post('/hello', async () => {
  const transactions = await knex('Transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'granaaa',
      amount: 20000,
    })
    .returning('*')

  return transactions
})

app.get('/hello', async () => {
  const transactions = await knex('Transactions')
    .select('*')
    .where('amount', 20000)

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server is running on port 3034')
  })
