import express from  "express"

import swaggerJSDoc from "swagger-jsdoc";

import path from "path"

//import configutation
import config from "../../config.json"


//import router



const app =  express()

/**
* remove x-powered header
*/
app.use(function (req, res, next) {
    res.removeHeader("X-Powered-By");
    res.setHeader("X-Powered-By","geraldsamosir")
    next();
});

const swaggerDefinition = {
    info: {
        title: config.AplicationName,
        version: config.version,
        description: config.description,
    },
    host: config.Host+':'+config.Port,
    basePath: config.basePath
}

const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ["./server/api/routes/*.js"]
};


const swaggerSpec = swaggerJSDoc(options);

/**
 * serve swagger
 */
app.get('/swagger.json', function(req, res) {

  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

/**
* swager docs router
*/
app.use("/docs_api",express.static(path.join(__dirname, '../../swagerdocs')));



app.get("/",(req,res)=>{
    res.json({
        message :"welcome to api"
    })
})





export default app

