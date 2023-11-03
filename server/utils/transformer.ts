import { uneval } from 'devalue';
import superjson from 'superjson';
import { unpack, pack } from 'msgpackr';
import type {DataTransformerOptions} from "@trpc/server";

const msgpacAndSuperjson = {
  serialize(object: any): any {
    const compressed = pack(superjson.serialize(object))
    return btoa(String.fromCharCode(...Array.from(compressed)))
  },
  deserialize(object: any): any {
    const notDecompressed = Uint8Array.from(atob(object), c => c.charCodeAt(0))
    return superjson.deserialize(unpack(notDecompressed))
  }
}

const evalHandler = {
  serialize: uneval,
  deserialize: (str) => (0, eval)(`(${str})`)
}

export default <DataTransformerOptions>{
  input: superjson,
  // input: msgpacAndSuperjson,
  output: evalHandler,
  // output: msgpackr,
};
