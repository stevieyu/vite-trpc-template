import { App } from 'uWebSockets.js'
import expressify  from "uwebsockets-express"
const app = expressify.default(App());



// import {Server} from 'hyper-express'
// const app = new Server();

////////////////////////////////////////////

import trpc from './trpc/server'
app.use('/api/trpc', trpc)

/////////////////////////////////////////////////////////////////////////////////////

const isProd = process.env.npm_lifecycle_event?.includes(':prod') || process.env.NODE_ENV === 'production'

import { resolve } from 'path'
import { createServer as createViteServer } from 'vite'
import serveStatic from 'serve-static'

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

console.log(`http://127.0.0.1:9000`)
app.listen(9000);