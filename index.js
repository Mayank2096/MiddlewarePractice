import express from "express";
import { dirname } from "path" ; // for get call
import { fileURLToPath } from "url"; // for get call
import bodyParser from "body-parser"; // for post call

const __dirname =dirname(fileURLToPath(import.meta.url));
const app= express();
const port= 3000;

// get method 
app.get('/', (req,res)=> {
    res.sendFile(__dirname +"/public/index.html");
}); 

// post method
app.use(bodyParser.urlencoded({extended:true}));
app.post("/submit", (req,res)=>{  // route "/submit " matches with input in action tag of form in htmlfile 
    //|| form action="/submit" method="POST"> ||
    console.log(req.body);
});

app.listen(port, ()=> {
    console.log("listening on port"+port);
});
