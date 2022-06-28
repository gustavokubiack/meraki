const express = require('express')
const {auth} = require('express-openid-connect')
const {requiresAuth} = require ('express-openid-connect')
require('dotenv').config({ path: '/home/aluno/merakivoluntariado/backend/.env' });

// Creating an App
const app = express()
const port = process.env.PORT || 3339

// Routes
app.get("/", (req, res)=>{
    res.send(('Hello World'))
})

app.get("/teste", (req, res)=>{
    res.send(('Teste'))
})

//Auth0
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUERURL
  };

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// Listen
app.listen( port, () => {
    console.log( `Server started at http://localhost:${ port }.` );
});

