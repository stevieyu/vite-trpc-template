
// import { db } from './db';
import { publicProcedure, router } from './trpc';
import {object, string, optional,array, union, number, any, date} from 'valibot'

const appRouter = router({
    users: publicProcedure
        .input(object({
            str: optional(string()),
            arr: optional(array(union([string(), number()]))),
            date: optional(date())
        }))
        .query(async (opts) => {
            const {input} = opts
            console.log(`date:`, input.date?.getFullYear());
            // Retrieve users from a datasource, this is an imaginary database
            // const users = await db.user.findMany();
            // return users;
            return input;
        }),
});
export type AppRouter = typeof appRouter;

const context = ({req, res}: {req:any, res:any}) => {
    return {
        me: null,
    }
};

export default {
    router: appRouter,
    createContext: context
}