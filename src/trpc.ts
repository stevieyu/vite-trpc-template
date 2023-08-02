import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';
import transformer from '../server/utils/transformer';

const trpc = createTRPCProxyClient<AppRouter>({
    transformer,
    links: [
        httpBatchLink({
            url: '/trpc',
            headers: () => {
                return {
                    Authorization: Date.now().toString()
                }
            }
        }),
    ],
});

trpc.users.query({
    str: '',
    arr: ['1', 2],
    date: new Date()
}).then(console.log)