import type {Plugin} from 'vite'
import { createHTTPHandler } from '@trpc/server/adapters/standalone';
import options from "./options";

export default (): Plugin => ({
    name: 'trpc-server',
    configureServer(server) {
        server.middlewares.use('/trpc', createHTTPHandler(options))
    },
    configurePreviewServer(server) {
        server.middlewares.use('/trpc', createHTTPHandler(options))
    }
})