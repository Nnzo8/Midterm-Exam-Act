const express = require('express');
const app = express();
const port = 3000; //port number

const Name = "Niño Rollane D. Ocliasa";//const for my full name
app.use(express.static('public'));//in order to run static public files

app.get("/", (req,res)=>{
    res.send("Welcome please type http://localhost:3000/test to see my full name")//instructions for route / or default route
});

// route test in order to display the message with my full name
app.get("/test", (req, res)=>{
    res.send(`Express is working! ${Name}`);//message with my full name
});

app.listen(port,()=>{
    console.log(`Server listening at ${port}`)//console message on where the server is running
});