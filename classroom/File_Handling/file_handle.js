const fs = require("fs");

// Async copy --------------

fs.copyFileSync("source.txt", "destination.txt");
fs.copyFile("source.txt", "destination_async.txt", (err) => {
    if (err) {
        console.log("File copy failed:", err);
    } else {                
        console.log("File copied successfully to async file");
    }   
});


// Sync Copy -------------

    fs.copyFileSync("source.txt","test1.txt")
    console.log("filecopyed")

// Async Delete -----------

fs.unlink("destination_async.txt", (err) => {
    if (err) {
        console.log("File deletion failed:", err);
    } else {
        console.log("File deleted successfully");
    }                           
});
fs.unlinkSync("dest.txt");


// create newDirectory -----------

fs.mkdir("newDirectory",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Directory created")
})

// nested folder creation-----------

fs.mkdir("folder/folder1/folder2",{recursive:true},(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Directory is created")
})

// Read the file -------------------

fs.readdir("newDirectory",(err,files)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("files",files);
})

// This delete the Directory if the Directory is empty ------------

fs.rmdir("newDirectory",(err)=>{
    if(err){
        console.log(err); return
    }
    console.log("directory is removed using rmdir")
})

// This Delete the Directory anyway (moden way)-----------

fs.rm("newDirectory",{recursive:true ,force:true},(err)=>{
    if(err){
        console.log(err); return
    }
    console.log("Directory is removed")
})