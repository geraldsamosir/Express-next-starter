import fs  from  "fs"
export default function generatemodel(modelname ,database_type ){
    if(database_type == "mysql" ){
        knex_orm_database(modelname)
        
    }
    else if(database_type == "mongodb"){
        mongose(modelname)
    }
    else{ 
        console.log('please set config in config.json')
    }


}


const  knex_orm_database = (modelname)=>{
    
      let  schemaModel =    "import BaseModels  from  '../../../core/rdbms/baseModel' \n"
                            +"const bookshelf = require('bookshelf')\n"
                            +"const  Conf = require('../../../core/rdbms/connection/db.js') \n"
                            +"const Bookshelf  = bookshelf(Conf.db)\n\n"
                            +"//filter schema type data \n"
                            +"const BaseJoi = require('joi') \n"
                            +"const ExtensionDate = require('joi-date-extensions');\n"
                            +"const Joi =BaseJoi.extend(ExtensionDate) \n"
                            +"const Model   =  BaseModel(Bookshelf) \n"
                            +"\n\n"
                            +"const "+modelname+"  = Model.extend({ \n"
                            +"\t tableName :'"+modelname+"', \n\n"
                            +"\t validate:{ \n"
                                +"\t\t //validation when create \n"
                            +"\t },\n"
                            +"\t validateUpdate:{ \n"
                               +"\t\t //validation when update \n"
                            +"\t } \n"
                            +"}) \n\n"
                            +"module.exports = "+modelname
    fs.writeFile("./server/api/model/"+modelname+"Model.js",  schemaModel, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log(modelname+"Model was saved!");
    }); 


}


const mongose  = (modelname)=>{

}