import { App } from 'uWebSockets.js'
const uwsApp = App();

////////////////////////////////////////////////////////////////

import expressify from "uwebsockets-express"

// @ts-ignore
const app = expressify.default(uwsApp);
// app.settings['x-powered-by'] = false;

////////////////////////////////////////////

import trpc from './trpc/server'
app.use('/api/trpc', trpc)

/////////////////////////////////////////////////////////////////////////////////////

const isProd = process.env.npm_lifecycle_event?.includes(':prod') || process.env.NODE_ENV === 'production'

import { dirname } from 'path'
import { createServer as createViteServer } from 'vite'
import serveStatic from 'serve-static'

if(!isProd){
    app.use((await createViteServer({
        server: {middlewareMode: true},
        appType: 'spa',
    })).middlewares);
}else{
    app.use(serveStatic(dirname('dist'), {
        index: 'index.html'
    }))
}

/////////////////////////////////////////////////////////////////////////////////////

console.log(`http://127.0.0.1:9000`)
app.listen(9000);