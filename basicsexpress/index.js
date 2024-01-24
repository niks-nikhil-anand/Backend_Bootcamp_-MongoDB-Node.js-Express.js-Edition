const express = require('express')
const app = express()

const port = 8000;


app.get('/' , (req,res)=>{
    res.send("Home")
})

app.get('/twitter' , (req , res) =>{
    res.send("niks.developer")
})

app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
})