const express = require('express')
const router = require('./router/iot.router')
const app = express()

app.use(express.json())
app.use('/',router)
app.listen(3000,()=>{
    console.log("Server Started at port 3000")
})