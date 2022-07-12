const express = require('express')

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


// Listen
app.listen( port, () => {
    console.log( `Server started at http://localhost:${ port }.` );
});

