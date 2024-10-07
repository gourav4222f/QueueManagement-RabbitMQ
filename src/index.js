const express = require("express")
const apiroutes = require("./routes")
const { PORT } = require('./config');

const {emailcontroller}=require("./controllers")

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api",emailcontroller.create)

app.listen(PORT,()=>{        
    console.log(`server is up on ${PORT}`)
})



