import express from 'express'

const defaultRouter = express.Router()

export const defaultRoutes = (router) => {

    router.use('/', defaultRouter)


    defaultRouter.get('/ping', (req, res) => {
        console.log(`Default router GET ping handler`);
        res.sendStatus(200);
    })
}