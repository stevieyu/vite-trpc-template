import { uneval } from 'devalue';
import superjson from 'superjson';

export default {
    input: superjson,
    output: {
        serialize: (object: any) => uneval(object),
        // This `eval` only ever happens on the **client**
        deserialize: (object: any) => (0, eval)(`(${object})`),
    },
};