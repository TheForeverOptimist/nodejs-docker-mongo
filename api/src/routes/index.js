import express from 'express'
import {defaultRoutes} from './defaults.js'



export default () => {

  const router = express.Router();

  defaultRoutes(router)



  return router;
};
