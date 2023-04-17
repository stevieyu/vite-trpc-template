import trpcServer from "./index";

export default () => ({
    name: 'trpc-server',
    configureServer(server: any) {
        server.middlewares.use('/trpc', trpcServer)
    },
    configurePreviewServer(server: any) {
        server.middlewares.use('/trpc', trpcServer)
    }
})