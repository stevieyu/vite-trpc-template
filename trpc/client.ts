import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './router';

async function main() {
  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: '/api/trpc',
      }),
    ],
  });

  const withoutInputQuery = await client.greeting.query();
  console.log(withoutInputQuery);

  const withInputQuery = await client.greeting.query({ name: 'Alex' });
  console.log(withInputQuery);
}

export default main