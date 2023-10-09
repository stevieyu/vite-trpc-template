import { uneval } from 'devalue';
import superjson from 'superjson';

export default {
  input: superjson,
  output: {
    serialize: uneval,
    deserialize: (str) => (0, eval)(`(${str})`)
  },
};
