import fs  from  "fs"

export default function generatecontroller(controllername){

    let schemacontroller  = "\n"
                            +"export default new  class "+controllername+"Controller{ \n\n"
                                +"\t Get(req,res) { \n\n" 
                                +"\t } \n\n"
                                +"\t Create(req,res) { \n\n" 
                                
                                +"\t } \n\n"
                                +"\t Update(req,res) { \n\n" 

                                +"\t } \n\n"
                                +"\t Delete(req,res) { \n\n" 

                                +"\t } \n\n"  
                            +"}"

    fs.writeFile("./server/api/controller/"+controllername+"Controller.js",  schemacontroller, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log(controllername+"Controller was saved!");
    }); 
    
}


