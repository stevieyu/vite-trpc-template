import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

async function main() {
  /**
   * @type {import('./router').default}
   */
  const client = createTRPCProxyClient({
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