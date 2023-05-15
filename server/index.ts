
// import { db } from './db';
import { publicProcedure, router } from './trpc';

const appRouter = router({
    users: publicProcedure
        .query(async () => {
            // Retrieve users from a datasource, this is an imaginary database
            // const users = await db.user.findMany();
            // return users;
            return [];
        }),
});
export type AppRouter = typeof appRouter;

// const createContext = ({req, res}: {req:any, res:any}) => {
//     return {
//         me: null,
//     }
// };

export default {
    router: appRouter,
    // createContext,
}