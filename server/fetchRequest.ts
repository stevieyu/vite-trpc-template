import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import trpcServer from "./index";
addEventListener('fetch', (event) => {
    return event.respondWith(
        fetchRequestHandler({
            endpoint: '/trpc',
            req: event.request,
            ...trpcServer
        }),
    );
});