const dotenv = require("dotenv")
const express=require("express");

dotenv.config();
module.exports={
    PORT:process.env.PORT,
    express:express
}