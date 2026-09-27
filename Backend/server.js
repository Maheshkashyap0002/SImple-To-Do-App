require("dotenv").config();
const express = require("express")
const app = require("./src/app")
const connectDB = require("./src/config/db")

connectDB();



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
  console.log(`server runing on the address http://localhost:${PORT}`)
})
