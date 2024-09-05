/* eslint-disable prettier/prettier */
import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3034)
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false){
  console.error('🥽 Invalid enviroment variables. (Ta dando erro ai dog! Revisa certinho ae)🥽', _env.error.format())

  throw new Error('Invalid enviroment variables')
}

export const env = _env.data