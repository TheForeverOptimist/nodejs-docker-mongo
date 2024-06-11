import express from 'express'
import {defaultRoutes} from './defaults.js'
import {userRoutes} from './users.js'
import config from '../lib/config.js';




export default () => {
    
  const router = express.Router();

    if(config.routes.default){
        defaultRoutes(router)

    }
    if(config.routes.users){
        userRoutes(router)
    }



  return router;
};
