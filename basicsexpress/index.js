require('dotenv').config()
const express = require('express')
const app = express()




app.get('/' , (req,res)=>{
    res.send("Home")
})

app.get('/twitter' , (req , res) =>{
    res.send("niks.developer")
})

app.get('/login' , (req , res) => {
    res.send('<h1>Login Successful - Nikhil Anand</h1>')
})
app.get('/coffee' , (req , res) =>{
    res.send('<h1>Get me a Coffee</h1>')
})

app.listen(process.env.PORT , ()=>{
    console.log(`listening on port`)
})