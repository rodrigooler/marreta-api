import Koa from 'koa'
import { marretaPhrases } from './src/marreta-lib'

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = marretaPhrases()
})

app.listen(6969)