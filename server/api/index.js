import express from  "express"

import swaggerJSDoc from "swagger-jsdoc";

import path from "path"

//import configutation
import config from "../../config.json"


//import users
import Users from "./routes/users"

const app =  express()

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


/**
* remove x-powered header
*/
app.use(function (req, res, next) {
    res.removeHeader("X-Powered-By");
    res.setHeader("X-Powered-By","geraldsamosir")
    next();
});


app.get("/",(req,res)=>{
    res.json({
        message :"welcome to api"
    })
})

app.use("/users",Users)

export default app
