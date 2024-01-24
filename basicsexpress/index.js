require('dotenv').config()
const express = require('express')
const app = express()

const gitHub = {
    "login": "niks-nikhil-anand",
    "id": 137920494,
    "node_id": "U_kgDOCDh_7g",
    "avatar_url": "https://avatars.githubusercontent.com/u/137920494?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/niks-nikhil-anand",
    "html_url": "https://github.com/niks-nikhil-anand",
    "followers_url": "https://api.github.com/users/niks-nikhil-anand/followers",
    "following_url": "https://api.github.com/users/niks-nikhil-anand/following{/other_user}",
    "gists_url": "https://api.github.com/users/niks-nikhil-anand/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/niks-nikhil-anand/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/niks-nikhil-anand/subscriptions",
    "organizations_url": "https://api.github.com/users/niks-nikhil-anand/orgs",
    "repos_url": "https://api.github.com/users/niks-nikhil-anand/repos",
    "events_url": "https://api.github.com/users/niks-nikhil-anand/events{/privacy}",
    "received_events_url": "https://api.github.com/users/niks-nikhil-anand/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Nikhil Anand",
    "company": null,
    "blog": "",
    "location": "Delhi",
    "email": null,
    "hireable": null,
    "bio": "Full Stack Web Developer | MERN | MongoDB | Git | AppWrite | Rest APIs | WordPress | Strapi | SEO",
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 420,
    "following": 824,
    "created_at": "2023-06-27T16:38:19Z",
    "updated_at": "2024-01-12T04:35:13Z"
  }


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
app.get('/github' , (req , res) =>{
    res.json({gitHub})
})

app.listen(process.env.PORT , ()=>{
    console.log(`listening on port`)
})