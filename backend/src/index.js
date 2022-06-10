const express = require('express')
const {auth} = require('express-openid-connect')
const {requiresAuth} = require ('express-openid-connect')

// Creating an App
const app = express()
const port = process.env.PORT || 3000

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
    secret: 'kjdasbdlkjbsçkafjbklsdjfbkçdsjbfçsdanbhkfdsnbjlfhsvdksdjbf',
    baseURL: 'http://localhost:3000',
    clientID: 'S8xaSrayiQjtTBPxur7eX9I8c0m2byKj',
    issuerBaseURL: 'https://dev-s0qct-48.us.auth0.com'
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

