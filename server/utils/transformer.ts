import { uneval } from 'devalue';
import superjson from 'superjson';
import type {DataTransformerOptions, DataTransformer} from "@trpc/server";

const evalHandler: DataTransformer = {
  serialize: uneval,
  deserialize: (str) => (0, eval)(`(${str})`)
}

export default <DataTransformerOptions>{
  input: superjson,
  output: evalHandler,
};
