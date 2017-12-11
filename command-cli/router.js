import fs  from  "fs"

export default function generaterouter(routername){

    let schemarouter  = "import express from  'express' \n"
                            +"const router =  express.Router() \n\n"
                            +"/** \n"
                            +"*@swagger \n"
                            +"* /api/"+routername+": \n"
                            +"*  get: \n"
                            +"*    tags: \n"
                            +"*      - "+routername+" \n"
                            +"*/ \n"
                            +"router.get('/',(req,res)=>{ \n\n"
                            +"\t res.json({message  :'please edit "+routername+".js'}) \n"    
                            +"}) \n\n"
                            +"/** \n"
                            +"*@swagger \n"
                            +"* /api/"+routername+": \n"
                            +"*  post: \n"
                            +"*    tags: \n"
                            +"*      - "+routername+" \n"
                            +"*/ \n"
                            +"router.post('/',(req,res)=>{ \n\n"
                            +"\t res.json({message  :'please edit "+routername+".js'}) \n"    
                            +"}) \n\n"

                            +"/** \n"
                            +"*@swagger \n"
                            +"* /api/"+routername+": \n"
                            +"*  put: \n"
                            +"*    tags: \n"
                            +"*      - "+routername+" \n"
                            +"*/ \n"
                            +"router.put('/',(req,res)=>{ \n\n"
                            +"\t res.json({message  :'please edit "+routername+".js'}) \n"    
                            +"}) \n\n"

                            +"/** \n"
                            +"*@swagger \n"
                            +"* /api/"+routername+": \n"
                            +"*  delete: \n"
                            +"*    tags: \n"
                            +"*      - "+routername+" \n"
                            +"*/ \n"
                            +"router.delete('/',(req,res)=>{ \n\n"
                            +"\t res.json({message  :'please edit "+routername+".js'}) \n"    
                            +"}) \n\n"

                            +"export default router"

    fs.writeFile("./server/api/routes/"+routername+".js",  schemarouter, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log(routername+" was saved!");
    }); 

   
    let data = fs.readFileSync('./server/api/index.js').toString().split("\n");

    data.splice(13, 0, "import "+routername+" from  './routes/"+routername+"'");
    let text = data.join("\n");

    data.splice(70, 0, "app.use('/"+routername+"',"+routername+")");
    text = data.join("\n");

    fs.writeFile('./server/api/index.js', text, function (err) {
        if (err) return console.log(err);
    });
    
}


