import { createExpressMiddleware } from '@trpc/server/adapters/express';
import trpcRouter from './router.js'

// created for each request
const createContext = ({req,res}) => ({});

export default createExpressMiddleware({
    router: trpcRouter,
    createContext,
})
