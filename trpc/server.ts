import { createExpressMiddleware } from '@trpc/server/adapters/express';
import trpcRouter from './router'

// created for each request
const createContext = ({req, res}: {req:any, res:any}) => {
    return {
        me: null,
    }
};

export default createExpressMiddleware({
    router: trpcRouter,
    createContext,
})
