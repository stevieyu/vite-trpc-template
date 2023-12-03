
// import { db } from './db';
import { publicProcedure, router } from './trpc';
import { wrap } from '@decs/typeschema';
import { object, string, optional, array, union, number, date, any } from 'valibot'
// import type {NodeHTTPCreateContextFn, NodeHTTPRequest, NodeHTTPResponse} from "@trpc/server/dist/adapters/node-http";

const appRouter = router({
  users: publicProcedure
    .input(wrap(object({
      str: optional(string()),
      arr: optional(array(union([string(), number()]))),
      date: optional(date()),
      test: optional(any()),
    })))
    .query(async (opts) => {
      const { input } = opts
      console.log(`date:`, input.date?.getFullYear());
      // Retrieve users from a datasource, this is an imaginary database
      // const users = await db.user.findMany();
      // return users;
      return input;
    }),
});
export type AppRouter = typeof appRouter;

// type CreateContextFn = NodeHTTPCreateContextFn<AppRouter, NodeHTTPRequest, NodeHTTPResponse>
// const context: CreateContextFn = ({req}) => {
//     console.log(req)
//     return {
//         me: null,
//     }
// };

export default {
  router: appRouter,
  // createContext: context
}
