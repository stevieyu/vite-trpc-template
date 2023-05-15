import { createHTTPHandler } from '@trpc/server/adapters/standalone';
import trpcServer from "./index";

export default () => ({
    name: 'trpc-server',
    configureServer(server: any) {
        server.middlewares.use('/trpc', createHTTPHandler(trpcServer))
    },
    configurePreviewServer(server: any) {
        server.middlewares.use('/trpc', createHTTPHandler(trpcServer))
    }
})