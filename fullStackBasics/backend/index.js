// const express = require('express') -- common JS \\ module Js
import express from 'express'


const app = express();

app.get("/" , (req,res) => {
    res.send("Server is ready")
})

// list of 5 jokes

app.get("/api/jokes", (req , res) => {
    const jokes = [
        {
            ID: 1,
            Title: "The Hungry Policeman",
            Content: "What did the policeman say to his hungry stomach? “Freeze. You’re under a vest."
        },
        {
            ID: 2,
            Title: "The Eye Conversation",
            Content: "What did the left eye say to the right eye? Between us, something smells!"
        },
        {
            ID: 3,
            Title: "Loud Guy",
            Content: "What do you call a guy who’s really loud? Mike."
        },
        {
            ID: 4,
            Title: "Bird Migration",
            Content: "Why do birds fly south in the winter? It’s faster than walking!"
        },
        {
            ID: 5,
            Title: "The Lava Romance",
            Content: "What did the lava say to his girlfriend? “I lava you!”"
        }
    ];
    res.send(jokes)    
})

const port = process.env.port || 3000
app.listen(port , () => {
   console.log(`Server listening at ${port}`)
})