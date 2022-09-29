import uWS from 'uWebSockets.js'
const uwsApp = uWS.App();

/////////////////////////////////////////////////////////////////////////////////////

import expressify from "uwebsockets-express"
const app = expressify.default(uwsApp);
app.settings['x-powered-by'] = false;

/////////////////////////////////////////////////////////////////////////////////////

import trpc from './trpc/server.js'
app.use('/api/trpc', trpc)

/////////////////////////////////////////////////////////////////////////////////////

import path from 'path'
import { fileURLToPath } from 'url'
import { createServer as createViteServer } from 'vite'
import serveStatic from 'serve-static'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p) => path.resolve(__dirname, p)
const isProd = process.env.npm_lifecycle_event?.includes(':prod') || process.env.NODE_ENV === 'production'

if(isProd){
  app.use(serveStatic(resolve('dist'), {
    index: 'index.html'
  }))
}else{
  app.use((await createViteServer({
    server: {middlewareMode: true},
    appType: 'spa',
  })).middlewares);
}

/////////////////////////////////////////////////////////////////////////////////////

app.listen(9000);