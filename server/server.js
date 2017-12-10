import express from "express"
import next  from "next"
import path from "path"

import Api from  "./api/"

//import configutation
import config from "../config.json"

const port =   parseInt(process.env.PORT, 10) || config.Port

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: './client', dev })
const handle = app.getRequestHandler()


app.prepare()
.then(() => {
    const server = express()

    server.disable('X-Powered-By');    

    /**
     * api router
     * 
     */

     server.use("/api",Api)


    /**
     * client router
     * 
    */
    server.get('/', (req, res) => {
        return app.render(req, res, '/', req.query)
    })



    server.listen(port, (err) => {
        if (err) throw err;
        console.log('Server ready on http://localhost:'+port+'');
    });
})