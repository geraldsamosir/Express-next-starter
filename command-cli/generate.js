import program  from "commander"

//config
import config from "../config.json"


//module generator
import  controllerGenerator from  "./controller"
import  modelGenerator from "./model"
import routerGenerator from "./router"

if (!process.argv.slice(2).length) {
      program.outputHelp();
}
else{
  program
    .version('0.1.0')
    .option('-c, --controller [controllerName]', 
        'Add controller , controller name dont have capital alvabet and space' ,(controllerName)=>{
        controllerGenerator(controllerName)
    })
    .option('-d , --database [database engine]','choose database engine')
    .option('-m ,--model [modelName]','Add model , modelName same with table name',(modelName)=>{
        modelGenerator(modelName,config.DbEngine)
    })
    .option('-r ,--router [routerName]',
        'Add router , router name dont have capital alvabet and space' ,(routerName)=>{
            routerGenerator(routerName)
        })
    
    .parse(process.argv);
}








