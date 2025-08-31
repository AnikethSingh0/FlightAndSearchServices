const express=require("express");

const {PORT}=require('./config/serverConfig');
const { urlencoded } = require("body-parser");


const setupAndStartServer=async()=>{
    const app=express();

    app.use(express.json());
    app.use(urlencoded({extended:true}))
    app.listen(PORT,()=>{
    console.log(`${PORT} has started..`);
    })

}
setupAndStartServer();