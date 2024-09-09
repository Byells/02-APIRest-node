// Finished second module.

import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
    host: env.HOST,
  })
  .then(() => {
    console.log('Server is running on port 3034')
  })
