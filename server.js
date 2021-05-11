const path = require('path')
const express = require('express')

const app = express()

const PORT = process.env.port || 5000


// define basic path
app.get('/', (req, res) => {
    res.send('Hello Server')
});


// show about
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'about.html'), (err) => {
        console.log(err)
    })
});

// listen to port
app.listen(PORT, () => {
    console.log(`Server started on port`);
});