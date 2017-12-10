import program  from "commander"

//module generator
import  controllerGenerator from  "./controller"

if (!process.argv.slice(2).length) {
      program.outputHelp();
}
else{
  program
    .version('0.1.0')
    .option('-c, --controller [controllerName]', 'Add controller' ,(controllerName)=>{
        controllerGenerator(controllerName)
    })
    .option('-d , --database [database engine]','choose database engine')
    .option('-m ,--router [model name]','Add model')
    .option('-r ,--router [router name]','Add router')
    
    .parse(process.argv);
}








