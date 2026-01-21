QUESTION-2;
const fs=require('fs');
const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{
    const parsedurl=url.parse(req.url,true);
    if(parsedurl.pathname==='/admin'  ){
        if(parsedurl.query.user==='admin' && parsedurl.query.pass==='1234'){
            fs.readFile("admin_dashboard.html","utf-8",(err,data)=>{hhhhhh
                if(err){
                    res.end(err);
                }
                else{
                    res.writeHead(200, { "Content-Type": "text/html" });

                    res.end(data);
                }
            })
        }

        else{
            res.end("user not found");
        }
    }

})

server.listen(8000,()=>{

    console.log("server started");
})


